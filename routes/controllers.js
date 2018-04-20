var express = require('express');
var router = express.Router();
var controllers_dal = require('../dal/controllers_dal');


router.get('/all', function(req, res, next){
    controllers_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('controllers/controllers_view_all', {controllers: result});
        }
    })
});

router.get('/add', function(req, res) {
    controllers_dal.getAll(function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.render('controllers/controllers_add', {controllers_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res) {
    controllers_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/controllers/all');
        }
    });
});

router.get('/edit', function(req, res){
    controllers_dal.getinfo(req.query.controller_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('controllers/ControllersUpdate',
                {controllers: result[0][0], controllers_result: result[1]});
        }
    });
});

router.get('/update', function(req, res) {
    controllers_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/controllers/all');
        }
    });
});

module.exports = router;