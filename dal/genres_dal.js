var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM genres;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO genres (genre) VALUES (?);';
    var queryData = [params.genre];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(genre_id, callback) {
    var query = 'CALL genres_getinfo(?)';
    var queryData = [genre_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE genres SET genre = ? WHERE genre_id = ?';

    var queryData = [params.genre, params.genre_id];

    connection.query(query, queryData, function(err, result) {
        callback (err, result);
    });
};

var NewGenresInsert = function(genre_id, genresIdArray, callback) {

    var query = 'INSERT INTO genres (genre_id) VALUES ?';

    var NewGenres = [];

    if (genresIdArray.constructor === Array) {
        for (var i = 0; i < genresIdArray.length; i++) {
            NewGenres.push([genre_id, genresIdArray[i]]);
        }
    }
    else {
        NewGenres.push([genre_id, genreIdArray]);
    }
    connection.query(query, [NewGenres], function (err, result) {
        callback(err, result);
    });
};

exports.delete = function(genre_id, callback) {
    var query = 'DELETE FROM genres WHERE genre_id = ?';
    var queryData = [genre_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, genre_id);
    });
};