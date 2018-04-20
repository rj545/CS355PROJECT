var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM consoles;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO consoles (console_title) VALUES (?);';
    var queryData = [params.console_title];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(console_id, callback) {
    var query = 'CALL consoles_getinfo(?)';
    var queryData = [console_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};