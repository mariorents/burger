const orm = require("../config/orm");

const burger = {
    all: function(all) {
        orm.selectAll("burgers", function(res){
            all(res);
        });
    },
};

module.exports = burger; 