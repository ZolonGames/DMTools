var express = require("express");
var router = express.Router();

var Encounter = require("../models/encounter");
var Subregion = require("../models/subregion");
var Region = require("../models/region");

// View All

router.get("/region", isLoggedIn, function(req, res){
    Region.find({}, function(err, regions){
        if(err)
        {
            console.log("Error encountered pulling records from DB");
        }
        else
        {
            console.log("Retrieved Regions from DB" + regions);
        }
        res.render("regions/regions", {
            pageTitle:"Region Manager",
            regions: regions
        });
    });
});

//Create New

router.get("/region/new", function(req, res){
    
    currentUser = req.user;

    res.render("regions/new", 
    {   pageTitle: "New Region"
    });
});

router.post("/region/new", isLoggedIn, function(req, res){
    Region.create({
        name: req.body.name,
        imagePath: req.body.image,
        biome: req.body.biome,
        description: req.body.description
     }, function (err, region){
         if(err){
             console.log("Error inserting item to DB");
         }
         else {
             console.log("Saved to DB");
             console.log(region);
             res.redirect("/region");
         }
     });
});

// Edit

router.get("/region/:id/edit", isLoggedIn, function(req, res){
    Region.findById(req.params.id, function(err, reg){
        if(err){
            res.redirect("/region");
        }
        else {
            res.render("regions/edit", 
            {   pageTitle: "Edit Region: " + reg.name,
                region: reg
            });
        }
    });
});

router.put("/region/:id", isLoggedIn, function(req, res){
    Region.findByIdAndUpdate(req.params.id, req.body.region, function(err, reg){
        if(err){
            res.redirect("/region");
        }
        else {
            res.redirect("/region");
        }
    });
});

// Delete

router.delete("/region/:id", isLoggedIn, function(req, res){
    Region.findByIdAndRemove(req.params.id, function(err, reg){
        if(err){
            res.redirect("/region");
        }
        else {
            res.redirect("/region");
        }
    });
});

/*** Encounters ***/

router.get("/region/:regionid/encounters", isLoggedIn, function(req, res){
    Region.findById(req.params.regionid).populate("encounters").exec(function(err, reg){
        if(err){
            res.redirect("/region");
        }
        else {
            res.render("regions/encounters/encounters", 
            {   pageTitle: "Encounters: " + reg.name,
                region: reg
            });
        }
    });
});

//Create New
router.get("/region/:regionid/encounters/new", function(req, res){
    
    currentUser = req.user;

    Region.findById(req.params.regionid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/encounters");
        }
        else {
            res.render("regions/encounters/new", 
            {   pageTitle: "New Encounter: " + reg.name,
                region: reg
            });
        }
    });
});

router.post("/region/:regionid/encounters/new", isLoggedIn, function(req, res){
    Region.findById(req.params.regionid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/encounters");
        }
        else {
            Encounter.create(req.body.encounter, function(err, encounter){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    reg.encounters.push(encounter);
                    reg.save(function(err, updatedRegion){
                        if (err)
                        {
                            console.log();
                        }
                        else
                        {
                            res.redirect("/region/" + req.params.regionid + "/encounters");
                        }
                    });
                }
            });
        }
    });
});
// Edit

router.get("/region/:regionid/encounters/:encounterid/edit", isLoggedIn, function(req, res){
    Encounter.findById(req.params.encounterid, function(err, encounter){
        if(err){
            res.redirect("/region/encounters/encounters");
        }
        else {
            res.render("regions/encounters/edit", 
            {   pageTitle: "Edit Encounter: " + encounter.name,
                encounter: encounter,
                regionid: req.params.regionid
            });
        }
    });
});

router.put("/region/:regionid/encounters/:encounterid", isLoggedIn, function(req, res){
    Encounter.findByIdAndUpdate(req.params.encounterid, req.body.encounter, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/encounters");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/encounters");
        }
    });
});

// Delete

router.delete("/region/:regionid/encounters/:encounterid", isLoggedIn, function(req, res){
    Encounter.findByIdAndRemove(req.params.encounterid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/encounters");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/encounters");
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