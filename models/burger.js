const orm = require("../config/orm");

const burger = {
    all: function(all) {
        orm.selectAll("burgers", function(res){
            all(res);
        });
    },

    update: function(id, data){
        orm.update("burgers", id, data);
    }
};

module.exports = burger; 