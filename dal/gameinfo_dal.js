var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM gameinfo;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO gameinfo (era, maker) VALUES (?, ?);';
    var queryData = [params.era, params.maker];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(gameinfo_id, callback) {
    var query = 'CALL gameinfo_getinfo(?)';
    var queryData = [gameinfo_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE gameinfo SET era = ?, maker = ? WHERE gameinfo_id = ?';

    var queryData = [params.era, params.maker, params.gameinfo_id];

    connection.query(query, queryData, function(err, result) {
        callback (err, result);
    });
};

var NewGameinfoInsert = function(gameinfo_id, gameinfoIdArray, callback) {

    var query = 'INSERT INTO gameinfo (gameinfo_id) VALUES ?';

    var NewGameinfo = [];

    if (gameinfoIdArray.constructor === Array) {
        for (var i = 0; i < gameinfoIdArray.length; i++) {
            NewGameinfo.push([gameinfo_id, gameinfoIdArray[i]]);
        }
    }
    else {
        NewGameinfo.push([gameinfo_id, gameinfoIdArray]);
    }
    connection.query(query, [NewGameinfo], function (err, result) {
        callback(err, result);
    });
};

exports.delete = function(gameinfo_id, callback) {
    var query = 'DELETE FROM gameinfo WHERE gameinfo_id = ?';
    var queryData = [gameinfo_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, gameinfo_id);
    });
};