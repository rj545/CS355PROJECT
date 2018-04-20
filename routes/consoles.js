var express = require('express');
var router = express.Router();
var consoles_dal = require('../dal/consoles_dal');


router.get('/all', function(req, res, next){
    consoles_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('consoles/consoles_view_all', {consoles: result});
        }
    })
});

router.get('/add', function(req, res) {
    consoles_dal.getAll(function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.render('consoles/consoles_add', {consoles_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res) {
    consoles_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/consoles/all');
        }
    });
});

router.get('/edit', function(req, res){
    consoles_dal.getinfo(req.query.console_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('consoles/ConsolesUpdate',
                {consoless: result[0][0], consoles_result: result[1]});
        }
    });
});

router.get('/update', function(req, res) {
    consoles_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/consoles/all');
        }
    });
});

module.exports = router;