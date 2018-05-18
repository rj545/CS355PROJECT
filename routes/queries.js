var express = require('express');
var router = express.Router();
var queries_dal = require('../dal/queries_dal');

// IN function
router.get('/query1', function(req, res, next){
    queries_dal.query1(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('queries/query1_view_all', {games: result})
        }
    });
});

//EXISTS function
router.get('/query2', function(req, res, next){
    queries_dal.query2(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('queries/query2_view_all', {games: result})
        }
    });
});

//GROUP BY function
router.get('/query3', function(req, res, next){
    queries_dal.query3(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('queries/query3_view_all', {games: result})
        }
    });
});

//ORDER BY function
router.get('/query4', function(req, res, next){
    queries_dal.query4(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('queries/query4_view_all', {games: result})
        }
    });
});

//UNION function
router.get('/query5', function(req, res, next){
    queries_dal.query5(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('queries/query5_view_all', {games: result})
        }
    });
});

// DISTINCT function
router.get('/query6', function(req, res, next){
    queries_dal.query6(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('queries/query6_view_all', {consoles: result})
        }
    });
});

module.exports = router;