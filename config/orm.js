const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table, data) {
        connection.query("SELECT * FROM " + table + ";" , function(err, result) {
            if (err) throw (err);
            console.log(result);
            data(result);
        });
    },  

    update: function(table, val, data){
        connection.query("UPDATE " +table+ "SET devoured=true WHERE id="+ val + ";", function(err,res){
            if(err) throw err;
            data(res);
        });
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