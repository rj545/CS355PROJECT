var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM controllers;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO controllers (available_controllers) VALUES (?);';
    var queryData = [params.available_controllers];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(controller_id, callback) {
    var query = 'CALL controllers_getinfo(?)';
    var queryData = [controller_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};