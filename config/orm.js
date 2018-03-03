const connection = require("./connection.js");

var orm = {
    selectAll: function(eaten) {
        var queryString = 'SELECT * FROM burgers WHERE devoured = ?';
        connection.query(queryString, [eaten], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(newBurger) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES ( = ?)';
        connection.query(queryString, [newBurger], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(wasEaten, burgerId) {
        var queryString = 'UPDATE burgers SET devoured = ? WHERE id = ?';
        connection.query(queryString, [wasEaten, burgerId], function(err, result) {
            if (err) throw err;
            console.log(result);
        })

    },
};

module.exports = orm;  