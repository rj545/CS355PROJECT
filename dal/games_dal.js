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
    var queryData = [params.game_title,params.rating];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(games_id, callback) {
    var query = 'CALL games_getinfo(?)';
    var queryData = [games_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE games SET game_title = ?, rating = ? WHERE games_id = ?';

    var queryData = [params.game_title, params.rating, params.games_id];

    connection.query(query, queryData, function(err, result) {
        callback (err, result);
    });
};

var NewGamesInsert = function(games_id, gamesIdArray, callback) {

    var query = 'INSERT INTO games (games_id) VALUES ?';

    var NewGames = [];

    if (gamesIdArray.constructor === Array) {
        for (var i = 0; i < gamesIdArray.length; i++) {
            NewGames.push([games_id, gamesIdArray[i]]);
        }
    }
    else {
        NewGames.push([games_id, gamesIdArray]);
    }
    connection.query(query, [NewGames], function (err, result) {
        callback(err, result);
    });
};

exports.delete = function(games_id, callback) {
    var query = 'DELETE FROM games WHERE games_id = ?';
    var queryData = [games_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, games_id);
    });
};