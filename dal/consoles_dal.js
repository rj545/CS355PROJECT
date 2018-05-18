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
    var query = 'INSERT INTO consoles (console_title, controllers) VALUES (?, ?);';
    var queryData = [params.console_title,params.controllers];

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

exports.update = function(params, callback) {
    var query = 'UPDATE consoles SET console_title = ?, controllers = ? WHERE console_id = ?';

    var queryData = [params.console_title, params.controllers, params.console_id];

    connection.query(query, queryData, function(err, result) {
        callback (err, result);
    });
};

var NewConsolesInsert = function(console_id, consolesIdArray, callback) {

    var query = 'INSERT INTO consoles (console_id) VALUES ?';

    var NewConsoles = [];

    if (consolesIdArray.constructor === Array) {
        for (var i = 0; i < consolesIdArray.length; i++) {
            NewConsoles.push([console_id, consolesIdArray[i]]);
        }
    }
    else {
        NewConsoles.push([console_id, consolesIdArray]);
    }
    connection.query(query, [NewConsoles], function (err, result) {
        callback(err, result);
    });
};

exports.delete = function(console_id, callback) {
    var query = 'DELETE FROM consoles WHERE console_id = ?';
    var queryData = [console_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, console_id);
    });
}