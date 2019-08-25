const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req,res)=> {
    burger.all(function(data){
        console.log(data)
        res.render("index",{data});
    });
});

module.exports = router; 


