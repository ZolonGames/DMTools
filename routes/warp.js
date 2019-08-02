var express = require("express");
var router = express.Router();
var WarpCharacter = require("../models/warpcharacter")

router.get("/warptracker", isLoggedIn, function(req, res){
    WarpCharacter.find({}, function(err, chars){
        if(err)
        {
            console.log("Error encountered pulling records from DB");
        }
        else
        {
            res.render("warptracker", {
                pageTitle:"Warp Tracker",
                warpChars: chars
            });
        }    
    });
});

router.get("/rosyntil", function(req, res){
    WarpCharacter.find({}, function(err, chars){
        if(err)
        {
            console.log("Error encountered pulling records from DB");
        }
        else
        {
            res.render("rosyntil", {
                pageTitle:"Rosyntil's Warp Tracker",
                warpChars: chars
            });
        }    
    });
});

router.post("/newwarpchar", isLoggedIn, function(req, res){
    
    var currentWarp = parseInt(req.body.currentWarp);
    if(currentWarp < 0)
    {
        currentWarp = 0;
    }

    WarpCharacter.create({
        name: req.body.name,
        playerName: req.body.playerName,
        currentWarp: req.body.currentWarp
     }, function (err, char){
         if(err){
             console.log("Error inserting item to DB");
         }
         else {
             console.log("Saved to DB");
             console.log(char);
             res.redirect("/warptracker");
         }
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