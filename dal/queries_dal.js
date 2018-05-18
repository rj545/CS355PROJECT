var mysql = require('mysql');
var db = require('./db_connection');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

// IN
exports.query1 = function(callback) {
    var query = 'SELECT game_title, rating FROM games g WHERE games_id IN (select games_id from game_genre);';
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

// EXISTS
exports.query2 = function(callback) {
    var query = 'SELECT game_title, rating \n' +
        'FROM games g\n' +
        'WHERE EXISTS (SELECT games_id \n' +
        'FROM game_genre \n' +
        'WHERE g.games_id=game_genre.games_id);';
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

//GROUP BY
exports.query3 = function(callback) {
    var query = 'SELECT COUNT(games_id), game_title, rating\n' +
        'FROM games\n' +
        'GROUP BY game_title;';
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


// ORDER BY
exports.query4 = function(callback) {
    var query = 'SELECT * FROM games ORDER BY rating;';
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

// UNION
exports.query5 = function(callback) {
    var query = 'SELECT game_title, rating FROM games UNION ALL SELECT console_title, controllers FROM consoles;';
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

// DISTINCT
exports.query6 = function(callback) {
    var query = 'SELECT DISTINCT controllers FROM consoles;';
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

// JOIN / GROUP BY / HAVING / DERIVED
exports.query7 = function(callback) {
    var query = 'SELECT game_title, rating, count(console_id) AS worked_for \n' +
        'FROM games g \n' +
        'JOIN game_console ON g.games_id=game_console.games_id \n' +
        'GROUP BY g.game_title \n' +
        'HAVING count(worked_for)<= 1;';
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};