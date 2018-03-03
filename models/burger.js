const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll('eaten', function(result) {
            cb(result);
        })
    },
    insert: function(cb) {
        orm.insertOne(newBurger, function(result) {
            cb(result);
        })
    },
    update: function(cb) {
        orm.updateOne([eaten, id], function(result) {
            cb(result);
            
        })
    }
 }

module.exports = burger;