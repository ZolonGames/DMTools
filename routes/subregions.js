var express = require("express");
var router = express.Router();

var Encounter = require("../models/encounter");
var Subregion = require("../models/subregion");
var Region = require("../models/region");
var Travel = require("../models/travel");
var POI = require("../models/poi");

// View All

router.get("/region/:regionid/subregions", isLoggedIn, function(req, res){
    Region.findById(req.params.regionid).populate("subregions").exec(function(err, reg){
        if(err){
            res.redirect("/region/:regionid/subregions");
        }
        else {
            res.render("regions/subregions/subregions", 
            {   pageTitle: "Subregions: " + reg.name,
                region: reg
            });
        }
    });
});

//Create New

router.get("/region/:regionid/subregions/new", function(req, res){

    console.log("Made it to Region!");
    Region.findById(req.params.regionid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions");
        }
        else {
            console.log("Attempting render...");
            res.render("regions/subregions/new", 
            {   pageTitle: "New Subregion: " + reg.name,
                region: reg
            });
        }
    });
});

router.post("/region/:regionid/subregions/new", isLoggedIn, function(req, res){
    Region.findById(req.params.regionid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions");
        }
        else {
            Subregion.create(req.body.subregion, function(err, subregion){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    reg.subregions.push(subregion);
                    reg.save(function(err, updatedSubregion){
                        if (err)
                        {
                            console.log();
                        }
                        else
                        {
                            res.redirect("/region/" + req.params.regionid + "/subregions");
                        }
                    });
                }
            });
        }
    });
});

// Edit

router.get("/region/:regionid/subregions/:subid/edit", isLoggedIn, function(req, res){
    Subregion.findById(req.params.subid, function(err, subregion){
        if(err){
            res.redirect("/region/subregions/subregions");
        }
        else {
            res.render("regions/subregions/edit", 
            {   pageTitle: "Edit Subregion: " + subregion.name,
                subregion: subregion,
                regionid: req.params.regionid
            });
        }
    });
});

router.put("/region/:regionid/subregions/:subid", isLoggedIn, function(req, res){
    Subregion.findByIdAndUpdate(req.params.subid, req.body.subregion, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/subregions");
        }
    });
});

// Delete

router.delete("/region/:regionid/subregions/:subid", isLoggedIn, function(req, res){
    Subregion.findByIdAndRemove(req.params.subid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/encounters");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/encounters");
        }
    });
});

/************************************************************/
/*** Encounters ***/

router.get("/region/:regionid/subregions/:subid/encounters", isLoggedIn, function(req, res){
    Subregion.findById(req.params.subid).populate("encounters").exec(function(err, reg){
        if(err){
            res.redirect("/region/:regionid/subregions");
        }
        else {
            res.render("regions/subregions/encounters/encounters", 
            {   pageTitle: "Encounters: " + reg.name,
                regionID: req.params.regionid,
                region: reg
            });
        }
    });
});

//Create New
router.get("/region/:regionid/subregions/:subid/encounters/new", function(req, res){

    Subregion.findById(req.params.subid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
        }
        else {
            res.render("regions/subregions/encounters/new", 
            {   pageTitle: "New Encounter: " + reg.name,
                regionID: req.params.regionid,
                region: reg
            });
        }
    });
});

router.post("/region/:regionid/subregions/:subid/encounters/new", isLoggedIn, function(req, res){
    req.body.encounter.findDC = parseInt(req.body.encounter.findDC);
    req.body.encounter.avoidDC = parseInt(req.body.encounter.avoidDC);
    Subregion.findById(req.params.subid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
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
                            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
                        }
                    });
                }
            });
        }
    });
});

// Edit

router.get("/region/:regionid/subregions/:subid/encounters/:encounterid/edit", isLoggedIn, function(req, res){
    Encounter.findById(req.params.encounterid, function(err, encounter){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
        }
        else {
            res.render("regions/subregions/encounters/edit", 
            {   pageTitle: "Edit Encounter: " + encounter.name,
                encounter: encounter,
                regionID: req.params.regionid,
                subID: req.params.subid
            });
        }
    });
});

router.put("/region/:regionid/subregions/:subid/encounters/:encounterid", isLoggedIn, function(req, res){
    Encounter.findByIdAndUpdate(req.params.encounterid, req.body.encounter, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
        }
    });
});

// Delete

router.delete("/region/:regionid/subregions/:subid/encounters/:encounterid", isLoggedIn, function(req, res){
    Encounter.findByIdAndRemove(req.params.encounterid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/encounters");
        }
    });
});

/************************************************************/
/*** Travel ***/

router.get("/region/:regionid/subregions/:subid/travel", isLoggedIn, function(req, res){
    Subregion.findById(req.params.subid).populate("travelLinks").exec(function(err, reg){
        if(err){
            res.redirect("/region/:regionid/subregions");
        }
        else {
            res.render("regions/subregions/travel/travel", 
            {   pageTitle: "Travel: " + reg.name,
                regionID: req.params.regionid,
                region: reg
            });
        }
    });
});

//Create New
router.get("/region/:regionid/subregions/:subid/travel/new", function(req, res){
    var regions;
    var selectedRegion;

    Subregion.findById(req.params.subid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
        }
        else {
            Region.find({}).populate("subregions").exec(function(err, reg){
                if(err){
                    res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
                }
                else {
                    regions = reg;
                    selectedRegion = regions[0];
                    res.render("regions/subregions/travel/new", 
                    {   pageTitle: "New Travel Link",
                        regionID: req.params.regionid,
                        subID: req.params.subid,
                        regions: regions,
                        region: reg,
                        selectedRegion: selectedRegion
                    });
                }
            });
        }
    });
});

router.post("/region/:regionid/subregions/:subid/travel/new", isLoggedIn, function(req, res){
    Subregion.findById(req.params.subid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
        }
        else {
            var travelEntry = req.body.travel;
            travelEntry.from = req.params.subid;
            Travel.create(travelEntry, function(err, travel){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    reg.travelLinks.push(travel);
                    reg.save(function(err, updatedTravel){
                        if (err)
                        {
                            console.log();
                        }
                        else
                        {
                            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
                        }
                    });
                }
            });
        }
    });
});

// Edit

router.get("/region/:regionid/subregions/:subid/travel/:travelid/edit", isLoggedIn, function(req, res){
    var travelResult;
    
    Travel.findById(req.params.travelid, function(err, travel){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
        }
        else {
            console.log("EDIT: Found travel result: " +travel);
            Region.find({}).populate("subregions").exec(function(err, reg){
                if(err){
                    res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
                }
                else {
                    regions = reg;
                    selectedRegion = regions[0];
                    res.render("regions/subregions/travel/edit", 
                    {   pageTitle: "Edit Travel Link",
                        travel: travel,
                        regionID: req.params.regionid,
                        subID: req.params.subid
                    });
                }
            });
        }
    });
});

router.put("/region/:regionid/subregions/:subid/travel/:travelid", isLoggedIn, function(req, res){
    Travel.findByIdAndUpdate(req.params.travelid, req.body.travel, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
        }
    });
});

// Delete

router.delete("/region/:regionid/subregions/:subid/travel/:travelid", isLoggedIn, function(req, res){
    Travel.findByIdAndRemove(req.params.travelid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/travel");
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

/************************************************************/
/*** Points of Interest ***/

router.get("/region/:regionid/subregions/:subid/pois", isLoggedIn, function(req, res){
    Subregion.findById(req.params.subid).populate("pois").exec(function(err, reg){
        if(err){
            res.redirect("/region/:regionid/subregions");
        }
        else {
            res.render("regions/subregions/pois/pois", 
            {   pageTitle: "Points of Interest: " + reg.name,
                regionID: req.params.regionid,
                region: reg
            });
        }
    });
});

//Create New
router.get("/region/:regionid/subregions/:subid/pois/new", function(req, res){

    Subregion.findById(req.params.subid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
        }
        else {
            res.render("regions/subregions/pois/new", 
            {   pageTitle: "New Point of Interest: " + reg.name,
                regionID: req.params.regionid,
                region: reg
            });
        }
    });
});

router.post("/region/:regionid/subregions/:subid/pois/new", isLoggedIn, function(req, res){
    Subregion.findById(req.params.subid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
        }
        else {
            POI.create(req.body.poi, function(err, poi){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    reg.pois.push(poi);
                    reg.save(function(err, updatedRegion){
                        if (err)
                        {
                            console.log();
                        }
                        else
                        {
                            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
                        }
                    });
                }
            });
        }
    });
});

// Edit

router.get("/region/:regionid/subregions/:subid/pois/:poiid/edit", isLoggedIn, function(req, res){
    POI.findById(req.params.poiid, function(err, poi){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
        }
        else {
            res.render("regions/subregions/pois/edit", 
            {   pageTitle: "Edit Point of Interest: " + poi.name,
                poi: poi,
                regionID: req.params.regionid,
                subID: req.params.subid
            });
        }
    });
});

router.put("/region/:regionid/subregions/:subid/pois/:poiid", isLoggedIn, function(req, res){
    POI.findByIdAndUpdate(req.params.poiid, req.body.poi, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
        }
    });
});

// Delete

router.delete("/region/:regionid/subregions/:subid/pois/:poiid", isLoggedIn, function(req, res){
    POI.findByIdAndRemove(req.params.poiid, function(err, reg){
        if(err){
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
        }
        else {
            res.redirect("/region/" + req.params.regionid + "/subregions/" + req.params.subid + "/pois");
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