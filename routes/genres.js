var express = require('express');
var router = express.Router();
var genres_dal = require('../dal/genres_dal');


router.get('/all', function(req, res, next){
    genres_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('genres/genres_view_all', {genres: result, was_successful: req.query.was_successful});
        }
    })
});

router.get('/add', function(req, res) {
    genres_dal.getAll(function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.render('genres/genres_add', {genres_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res) {
    genres_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/genres/all');
        }
    });
});

router.get('/edit', function(req, res){
    genres_dal.getinfo(req.query.genre_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('genres/GenresUpdate', {genres: result[0][0]});
        }
    });
});

router.get('/update', function(req, res) {
    genres_dal.update(req.query, function(err, genre_id){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/genres/all');
        }
    });
});

router.get('/delete', function(req, res) {
    genres_dal.delete(req.query.genre_id, function(err, genre_id) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/genres/all?genre_id=' + genre_id + '&was_successful=1');
        }
    });
});

module.exports = router;