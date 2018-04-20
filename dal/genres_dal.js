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
    var queryData = [params.game_genre];

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