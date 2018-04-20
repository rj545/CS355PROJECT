var express = require('express');
var router = express.Router();
var gamegenre_dal = require('../dal/gamegenre_dal');


router.get('/all', function(req, res, next){
    gamegenre_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('gamegenre/gamegenre_view_all', {gamegenre: result});
        }
    })
});

router.get('/add', function(req, res) {
    gamegenre_dal.getAll(function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.render('gamegenre/gamegenre_add', {gamegenre_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res) {
    gamegenre_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/gamegenre/all');
        }
    });
});

router.get('/edit', function(req, res){
    gamegenre_dal.getinfo(req.query.games_id, req.query.genre_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('gamegenre/GamegenreUpdate',
                {gamegenre: result[0][0], gamegenre_result: result[1]});
        }
    });
});

router.get('/update', function(req, res) {
    gamegenre_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/gamegenre/all');
        }
    });
});

module.exports = router;