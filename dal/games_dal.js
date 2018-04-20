var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM games;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO games (game_title, rating) VALUES (?, ?);';
    var queryData = [params.game_title, rating];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(game_id, callback) {
    var query = 'CALL games_getinfo(?)';
    var queryData = [games_id, rating];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

