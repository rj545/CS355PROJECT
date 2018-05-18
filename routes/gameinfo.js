var express = require('express');
var router = express.Router();
var gameinfo_dal = require('../dal/gameinfo_dal');


router.get('/all', function(req, res, next){
    gameinfo_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('gameinfo/gameinfo_view_all', {gameinfo:result, was_successful: req.query.was_successful});
        }
    })
});

router.get('/add', function(req, res) {
    gameinfo_dal.getAll(function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.render('gameinfo/gameinfo_add', {gameinfo: result[0][0]});
        }
    });
});

router.get('/insert', function(req, res) {
    gameinfo_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/gameinfo/all');
        }
    });
});

router.get('/edit', function(req, res){
    gameinfo_dal.getinfo(req.query.gameinfo_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('gameinfo/GameinfoUpdate', {gameinfo: result[0][0]});
        }
    });
});

router.get('/update', function(req, res) {
    gameinfo_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/gameinfo/all');
        }
    });
});

router.get('/delete', function(req, res) {
    gameinfo_dal.delete(req.query.gameinfo_id, function(err, gameinfo_id) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/gameinfo/all?gameinfo_id=' + gameinfo_id + '&was_successful=1');
        }
    });
});

module.exports = router;