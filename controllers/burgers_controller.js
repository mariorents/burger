const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req,res)=> {
    burger.all(function(data){
        console.log(data)
        res.render("index",{data});
    });
});

router.put("/api/update", (req,res)=> {
    burger.update(req.body., function(result){
        console.log(result);
        res.redirect("/");
    })
})

module.exports = router; 
    

