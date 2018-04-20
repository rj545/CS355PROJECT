var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM game_genre;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO game_genre (games_id, genre_id) VALUES (?, ?);';
    var queryData = [params.games_id, genre_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(games_id, genre_id, callback) {
    var query = 'CALL game_genre_getinfo(?)';
    var queryData = [games_id, genre_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
