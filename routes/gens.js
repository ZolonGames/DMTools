var express = require("express");
var router = express.Router();
var Subregion = require("../models/subregion");
var Region = require("../models/region");

router.get("/gens", isLoggedIn, function(req, res){

    res.render("gens/gens", 
    {   pageTitle: "Generators"
    });
});

router.get("/gens/weather", isLoggedIn, function(req, res){

    res.render("gens/weather", 
    {   pageTitle: "Weather Generator"
    });
});

router.get("/gens/encounters", isLoggedIn, function(req, res){

    Region.find({}, function(err, reg){
        if(err){
            res.redirect("/gens");
        }
        else {
            selectedRegion = reg[0];
            res.render("gens/encounters", 
            {   pageTitle: "Encounter Generator",
                regions: reg,
                selectedRegion: selectedRegion
            });
        }
    });
});

router.get("/gens/warpeffects", isLoggedIn, function(req, res){

    res.render("gens/warpeffects", 
    {   pageTitle: "Warp Effect Generator"
    });
});

router.get("/gens/creatures", isLoggedIn, function(req, res){

    res.render("gens/creatures", 
    {   pageTitle: "Mutant Creature Generator"
    });
});

router.get("/gens/open/dndchar", function(req, res){

    res.render("gens/dndchar", 
    {   pageTitle: "D&D Character Generator"
    });
});


function isLoggedIn(req, res, next)
{
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;