const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req,res)=> {
    burger.all(function(data){
        console.log(data)
        res.render("index",{data});
    });
});

router.put("/burgers/update", (req,res)=> {
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    })
})

module.exports = router; 
    

