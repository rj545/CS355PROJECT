var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL gameinfo_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO gameinfo (era, maker) VALUES (?, ?);';
    var queryData = [params.era, maker];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(gameinfo_id, callback) {
    var query = 'CALL gameinfo_getinfo(?)';
    var queryData = [gameinfo_id, era, maker];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};