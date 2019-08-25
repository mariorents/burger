const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table) {
    connection.query("SELECT * FROM " + table + ";" , function(err, result) {
        if (err) throw (err);
        console.log(result);
        })
    },  

    // insertOne: function(burgerName) {
    //     const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES(?, false)";
    //     connection.query(queryString,[burgerName], function(err, result) {
    //         if (err) throw (err);
    //         console.log(result)
    //     })
    // },
};

module.exports = orm;