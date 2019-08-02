var express = require("express");

var Subregion = require("../models/subregion");
var Region = require("../models/region");
var WarpCharacter = require("../models/warpcharacter");
var CharGenCounter = require ("../models/chargencounter");
var generators = require("../scripts/generators");
var moment                  = require("moment");
var router = express.Router();
var charsGenned = 0 ;
var alertsRecord = [];
var MAX_ALERTS_KEPT = 50;

router.get("/api/search/travel/subregions/:regionID", isLoggedIn, function(req, res){
    Region.findById(req.params.regionID).populate("subregions").exec(function(err, reg){
        if(err){
            res.send("An error was detected.");
        }
        else {

            var subs = [];
            reg.subregions.forEach(s => {
                subs.push({id: s._id, name: s.name});
            });
            res.send(subs);
        }
    });
});

router.get("/api/gens/encounter/:regionID/:subregionID", isLoggedIn, function(req, res){
    var encounters = [];
    var chosenEncounters = [];
    
    Region.findById(req.params.regionID).populate("encounters").exec(function(err, reg){
        if(err){
            res.send("An error was detected.");
        }
        else {
            Subregion.findById(req.params.subregionID).populate("encounters").exec(function(err, sub){
                if(err){
                    res.send("An error was detected.");
                }
                else {
                    reg.encounters.forEach(function(enc){
                        if (enc.rarity == "Common")
                        {
                            for (var i = 0; i < 7; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Uncommon")
                        {
                            for (var i = 0; i < 5; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Rare")
                        {
                            for (var i = 0; i < 3; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Very Rare")
                        {
                            for (var i = 0; i < 2; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Legendary")
                        {
                            for (var i = 0; i < 1; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                    });

                    sub.encounters.forEach(function(enc){
                        if (enc.rarity == "Common")
                        {
                            for (var i = 0; i < 7; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Uncommon")
                        {
                            for (var i = 0; i < 5; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Rare")
                        {
                            for (var i = 0; i < 3; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Very Rare")
                        {
                            for (var i = 0; i < 2; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                        else if (enc.rarity == "Legendary")
                        {
                            for (var i = 0; i < 1; i++)
                            {
                                encounters.push({
                                    name: enc.name,
                                    rarity: enc.rarity,
                                    findDC: enc.findDC,
                                    avoidDC: enc.avoidDC,
                                    description: enc.description
                                    });
                            }
                        }
                    });
                    for (var i = 0; i < 10; i++)
                    {
                        chosenEncounters.push(encounters[Math.floor(Math.random()*encounters.length)]);
                    }

                    res.send(chosenEncounters);
                }
            });
        }
    });
});

router.get("/api/gens/weather", function(req, res){
    var forecast = [];
    var hour = 0;
    var num = 0;
    while(hour <= 24)
    {
        num = d100(); // Percentile
        // get weather type
        if (num <= 35)
        {
            num =  d4();
            forecast.push({
                type: "Clear Skies",
                image: "clearskies.jpg",
                duration: num,
                description: "Clear, uncovered skies."
            });
        }
        else if (num <= 55)
        {
            num =  d8();
            forecast.push({
                type: "Overcast",
                image: "overcast.jpg",
                duration: num,
                description: "Overcast, with a bit of wind."
            });
        }
        else if (num <= 70)
        {
            num =  d4() + d4() + d4();
            forecast.push({
                type: "Warp Fog",
                image: "warpfog.jpg",
                duration: num,
                description: "A purplish fog rolls in. The area has its ambient warp increased by one level. " +
                "\nDisadvantage to perception checks. \nAdvantage to stealth checks."
            });
        }
        else if (num <= 82)
        {
            num =  d4();
            forecast.push({
                type: "Rain Shower/Light Snowfall/Sleet",
                image: "lightrainsnow.jpg",
                duration: num,
                description: "Depending on the environment, either it's lightly raining, lightly snowing, or... both."
            });
        }
        else if (num <= 90)
        {
            num =  d4() + d4();
            forecast.push({
                type: "Rain Storm/Heavy Snowfall",
                image: "rainsnowheavy.jpg",
                duration: num,
                description: "It is heavily raining, or heavily snowing. There's significant wind, and the temperature drops."
            });
        }
        else if (num <= 96)
        {
            num =  d4() + d4() + d4();
            var intensity = d4();
            var descText = "";
            switch(intensity)
            {
                case 1: descText = "chance for Lightning Strike Every 20 minutes.";
                    break;
                case 2: descText = "chance for Lightning Strike Every 10 minutes.";
                    break;
                case 3: descText = "chance for Lightning Strike Every 5 minutes.";
                    break;
                case 4: descText = "chance for Lightning Strike Every minute.";
                    break;
            }
            forecast.push({
                type: "Storm/Blizzard",
                image: "stormblizzard.jpg",
                duration: num,
                description: "It's intensely snowing or raining. If it's snowing, mobility is severely decreased and the " + 
                "temperature has dropped significantly. If it's storming, there is a " + descText + "\nRoll a d4. 1-2, Lighting" +
                " flashes in the sky.\n3, it strikes in the near distance.\n4, it strikes on the immediate location.\nIf a player or " + 
                "object is wearing metal in the area, roll a d4. On a 4, that item is struck. Otherwise, roll 1d10 for each object " +
                "in the region, starting with the tallest. On a 0, lightning strikes that object.\nA lightning strike is a 15 square " +
                "centered on its target, DC20 dex save or suffer 6d10 lightning damage. Save halves.\nif hit, DC15 CON save or " +
                "stunned for 1 minute (save ends).\nAll creatures in 30ft of target must roll a DC15 dex saving throw or suffer 3d10 lightning " +
                "damage from smaller arcs."
            });
        }
        else if (num <= 99)
        {
            num =  d4();
            var intensity = d4();
            var descText = "";
            var element = d10();
            var eleText = "";
            switch(intensity)
            {
                case 1: descText = "chance for Lightning Strike Every 20 minutes.";
                    break;
                case 2: descText = "chance for Lightning Strike Every 10 minutes.";
                    break;
                case 3: descText = "chance for Lightning Strike Every 5 minutes.";
                    break;
                case 4: descText = "chance for Lightning Strike Every minute.";
                    break;
            }
            switch(element)
            {
                case 1: eleText = "Fire";
                    break;
                case 2: eleText = "Cold energy";
                    break;
                case 3: eleText = "Acid";
                    break;
                case 4: eleText = "Lightning";
                    break;
                case 5: eleText = "Force magic";
                    break;
                case 6: eleText = "Radiant energy";
                    break;
                case 7: eleText = "Necrotic energy";
                    break;
                case 8: eleText = "Poison";
                    break;
                case 9: eleText = "Psychic disruptuon";
                    break;
                case 10: eleText = "Swarm of Bees";
                    break;
            }
            forecast.push({
                type: "Mana Storm",
                image: "manastorm.jpg",
                duration: num,
                description: "The sky turns to a deep blue/green/purple colour, as clouds swirl in chaotic patterns. The storm is empowered by " +
                "a certain element: " + eleText + ". The area is treated as one levels higher Ambient Warp, and becomes highly " +
                "dangerous. There is a " + descText + "\nRoll a d4.\n1-2, " + eleText +  "  surges in the sky.\n3, it strikes in the " +
                "near distance.\n4, it strikes on the immediate location.\nIf a player or object is casting spells in the area, " +
                "roll a d4. On a 4, that item is struck. Otherwise, roll 1d10 for each object in the region, starting with the " +
                "tallest. On a 0, " + eleText +  " strikes that object.\nA " + eleText +  " surge is a 15ft square centered on its " +
                "target, DC20 dex save or suffer 8d10 " + eleText +  " damage. Save halves.\nIf hit, DC15 CON save or suffer a " +
                "status effect for 1 minute (save ends).\nAll creatures in 30ft of target must roll a DC15 dex saving throw or " +
                "suffer 4d10 " + eleText +  " damage from smaller surges.\nWhen " + eleText +  " strikes, everyone within 30ft " +
                "immediately suffers 3d6 warp damage.\nAnyone directly hit by the bolt suffers an additional 6d8 warp damage."
            });
        }
        else
        {
            num =  d4() + d4();
            var intensity = d4();
            var descText = "";
            
            switch(intensity)
            {
                case 1: descText = "chance for Lightning Strike Every 20 minutes.";
                    break;
                case 2: descText = "chance for Lightning Strike Every 10 minutes.";
                    break;
                case 3: descText = "chance for Lightning Strike Every 5 minutes.";
                    break;
                case 4: descText = "chance for Lightning Strike Every minute.";
                    break;
            }
            
            forecast.push({
                type: "Warp Storm",
                image: "warpstorm.jpg",
                duration: num,
                description: "The sky turns to a deep red/purple colour, as clouds swirl in chaotic patterns. Thunder rumbles, and blasts" + 
                "of energy appear in the sky. The area becomes highly warp affected, increasing the ambient warp in the area by 2 levels. " + 
                "If it's storming, there is a " + descText + "\nRoll a d4. 1-2, Lighting" +
                " flashes in the sky.\n3, it strikes in the near distance.\n4, it strikes on the immediate location.\nIf a player or " + 
                "object is casting spells in the area, roll a d4. On a 4, that item is struck. Otherwise, roll 1d10 for each object " +
                "in the region, starting with the tallest. On a 0, lightning strikes that object.\nA lightning strike is a 15 square " +
                "centered on its target, DC20 dex save or suffer 8d10 lightning damage, and 25 warp. Save halves, and reduces warp to 15. " +
                "\nif hit, DC15 INT save or " +
                "the target becomes affected by a random magical effect, as described below.\nAll creatures in 30ft of target must roll a " +
                "DC15 dex saving throw or suffer 4d10 lightning damage and 15 warp from smaller arcs." +
                "\n\n The following effects can occur (Roll a D20):" +
                "\n 1: The creature(s) and all objects are reduced to miniscule size (6 inches) for 1d4 rounds." +
                "\n 2: The creature(s) and all objects are increased to gigantic size (20 feet) for 1d4 rounds." +
                "\n 3: For 2d4 rounds, all healing spells and abilities will instead harm the creature(s). Necrotic damage will, however, heal them." +
                "\n 4: For 2d4 rounds, all creatures have their gender reversed, if possible." +
                "\n 5: For 1d4 rounds, all creatures can spend a bonus action to hear the inner thoughts of another creature." +
                "\n 6: For 1d4 rounds, whenever the creatures try to speak, a horde of tiny spiders crawls from their throat. DC 15 CON check to try not to vomit horribly and be incapacitated. For the duration, the creature(s) are unable to speak." +
                "\n 7: For 1d4 rounds, the creature(s) swap mind and bodies with another nearby creature." +
                "\n 8: The creature(s) body explodes, and they experience horrible pain for 1d4 rounds. After those rounds, their bodies reform as if nothing ever happened." +
                "\n 9: For the next 1d4 rounds, all creatures forget who they are, and what they're doing. After the duration ends, their memories return to them." +
                "\n 10: For the next 1d4 rounds, the affected creature(s)' voices become thunderously loud." +
                "\n 11: For the next 2d4 rounds, you must fight the compulsion to start singing and dancing. If, at any point, you start, you cannot stop. You must pass a DC 10 Charisma saving throw to fight the urge. If you succeed, each round, you simply giggle to yourself." +
                "\n 12: A massive tree suddenly grows at the point of impact. All creatures in the impact zone are pushed out, but believe the tree to be a divine creation, putting aside their differences to praise it for 2d4 rounds." +
                "\n 13: All creatures affected by the blast gain the ability to speak to inanimate objects for 1d4 days. However, they never have anything interesting to say." +
                "\n 14: A large feast appears at the point of impact. All creatures in the blast must succeed on a DC 20 charisma saving throw, or sit down to enjoy a nice meal. Any action taken against them that would disrupt their eating requires a DC 15 WIS save. On a fail, the creature complains and asks the person to stop so they can continue their meal." +
                "\n 15: A large warp crystal appears in the blast site. The area is now treated as two levels higher ambient warp." +
                "\n 16: All creatures in the blast must roll a DC 20 constitution save. On a fail, their legs require constant movement or they will suffer 4d12 psychic damage at the end of their turn if they do not move, for 2d4 rounds." +
                "\n 17: A tiny thundercloud appears over each affected creature for 2d4 rounds. At the end of each round, it zaps the affected creature with lightning for 2D12 lightning damage. However, the cloud will transfer to the target of a hostile ability, attack, or spell." +
                "\n 18: All affected creatures percieve allies as enemies, and enemies as allies for 1d4 rounds." +
                "\n 19: A cloud appears over the affected creature(s)' heads. It begins to snow, and does so for 1d4 hours." +
                "\n 20: Roll twice, keep each result." +
                "\n\n NOTE: If out of combat, replace rounds with hours."
            });
        }
        hour += num;
    }
    res.send(forecast);
});


router.get("/api/gens/open/rosyntil", function(req, res)
{
    //console.log("Requested Alerts: " + alertsRecord.length + " total alerts found.");
    //console.log("START ALERTS");
    //var counter = 0;
    //while (counter < alertsRecord)
    //{
    //    counter++;
    //    console.log(counter + ": " + alertsRecord[counter - 1])
    //}
    //console.log("END ALERTS");
    res.send(alertsRecord);
});

router.get("/api/gens/warp/updateVals", function(req, res)
{
    var characters = [];
    WarpCharacter.find({}, function(err, chars){
        if(err)
            {
                console.log("Error in finding all: " + err);
            }
            else
            {
                chars.forEach(function(char){
                    characters.push({id: char._id, warp: char.currentWarp});
                });

                res.send(characters);
            }
    });
});

router.post("/api/gens/updatewarp/:who/:amount", isLoggedIn, function(req, res){
    var alerts = [];
    var currAlert;
    var warpChange = parseInt(req.params.amount);
    if(req.params.who === "all")
    {
        console.log("Entered Update All");
        WarpCharacter.find({}, function(err, chars){
            if(err)
            {
                console.log("Error in finding all: " + err);
            }
            else
            {
                chars.forEach(function(char) {
                    currAlert = findWarpAlerts(char.currentWarp, warpChange, char.name)
                    console.log("Alerts returned for " + char.name + ": " + currAlert);
                    if ( currAlert != null)
                    {
                        alerts = alerts.concat(currAlert);
                    }
                    char.currentWarp += warpChange;
                    if (char.currentWarp < 0)
                    {
                        char.currentWarp = 0;
                    }
                    char.save(function(err, char){
                        if (err){
                            console.log("Error encountered saving record: " + err);
                        }
                        else
                        {
                            
                        }
                    });
                });
                updateAlertsRecord(alerts);
                res.send(alerts);
            }
        });
    }
    else
    { 
        console.log("Entered Else Clause - individual update!");
        WarpCharacter.findById(req.params.who, function(err, char){
            if(err)
            {
                console.log("Error encountered pulling records from DB");
                console.log(req.params.who);
            }
            else
            {
                currAlert = findWarpAlerts(char.currentWarp, warpChange, char.name)
                console.log("Alerts returned for " + char.name + ": " + currAlert);
                    if ( currAlert != null)
                    {
                        if ( currAlert != null)
                        {
                            alerts = alerts.concat(currAlert);
                        }
                        console.log("At " + char.name + ". Current Status of Alerts: " + alerts);
                    }
                char.currentWarp += warpChange;
                if (char.currentWarp < 0)
                {
                    char.currentWarp = 0;
                }
                char.save(function(err, char){
                    if (err){
                        console.log("Error encountered saving record: " + err);
                    }
                });
            }
            updateAlertsRecord(alerts);
            res.send(alerts);
        });
    }
});

function updateAlertsRecord(alerts)
{
    var newAlerts = alerts.slice();
    console.log("Updating Alerts Records");
    console.log("Received Alerts: " + alerts.length);
    console.log("Existing Alerts: " + alertsRecord.length)
    alerts.forEach(function(alert){
        alertsRecord.unshift(alert);
    });
    console.log("Concatted alerts: " + alertsRecord.length);
    while (alertsRecord.length > MAX_ALERTS_KEPT)
    {
        alertsRecord.pop();
    }
}

router.get("/api/gens/warpeffect/:level/:type", isLoggedIn, function(req, res){
    var effect = "";
    if(req.params.level == "minor" && req.params.type == "anomaly")
    {
        effect = generators.minorAnomaly();
    }
    else if(req.params.level == "major" && req.params.type == "anomaly")
    {
        effect = generators.majorAnomaly();
    }
    else if(req.params.level == "minor" && req.params.type == "manifestation")
    {
        effect = generators.minorManifest();
    }
    else if(req.params.level == "major" && req.params.type == "manifestation")
    {
        effect = generators.majorManifest();
    }
    else if(req.params.level == "minor" && req.params.type == "mutation")
    {
        effect = generators.minorMutation();
    }
    else if(req.params.level == "major" && req.params.type == "mutation")
    {
        effect = generators.majorMutation();
    }
    else if(req.params.level == "transformative" && req.params.type == "mutation")
    {
        effect = generators.transformMutation();
    }
    else
    {
        effect = "Incorrect Conditions Submitted";
    }

    res.send(effect);
});

// Dice

function d4(){
    return Math.floor((Math.random() * 4) + 1);
};

function d6(){
    return Math.floor((Math.random() * 6) + 1);
};

function d8(){
    return Math.floor((Math.random() * 8) + 1);
};

function d10(){
    return Math.floor((Math.random() * 10) + 1);
};

function d12(){
    return Math.floor((Math.random() * 12) + 1);
};

function d20(){
    return Math.floor((Math.random() * 20) + 1);
};

function d100(){
    return Math.floor((Math.random() * 100) + 1);
};

function dx(num){
    return Math.floor((Math.random() * num) + 1);
};

// Helper Functions

function findWarpAlerts(warp, change, name)
{
    console.log("Checking alerts for " + name + "...");
    var alerts = [];
    var newWarp = warp + change;
    var now = moment();
    var formatted = now.format('LLL')
    var timestamp = formatted + "<br />";
    if (change > 0)
    {
        if( warp < 20 && newWarp >= 20)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 60 && newWarp >= 60)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 100 && newWarp >= 100)
        {
            alerts.push({text: timestamp + name + " has evoked a minor manifestation!", color: "#EBFF00"});
        }
        if( warp < 140 && newWarp >= 140)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 160 && newWarp >= 160)
        {
            alerts.push({text: timestamp + name + " has suffered a point of exhaustion!", color: "#b7a7a7"});
        }
        if( warp < 180 && newWarp >= 180)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 200 && newWarp >= 200)
        {
            alerts.push({text: timestamp + name + " has evoked a minor manifestation!", color: "#EBFF00"});
        }
        if( warp < 220 && newWarp >= 220)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 260 && newWarp >= 260)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 300 && newWarp >= 300)
        {
            alerts.push({text: timestamp + name + " has evoked a minor manifestation!", color: "#EBFF00"});
        }
        if( warp < 320 && newWarp >= 320)
        {
            alerts.push({text: timestamp + name + " has suffered a point of exhaustion!", color: "#b7a7a7"});
        }
        if( warp < 340 && newWarp >= 340)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 380 && newWarp >= 380)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 400 && newWarp >= 400)
        {
            alerts.push({text: timestamp + name + " has been afflicted by a minor mutation!", color: "#F400FD"});
        }
        if( warp < 440 && newWarp >= 440)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 460 && newWarp >= 460)
        {
            alerts.push({text: timestamp + name + " has suffered a point of exhaustion!", color: "#b7a7a7"});
        }
        if( warp < 480 && newWarp >= 480)
        {
            alerts.push({text: timestamp + name + " has triggered a minor anomaly!", color: "#2890FF"});
        }
        if( warp < 500 && newWarp >= 500)
        {
            alerts.push({text: timestamp + name + " has evoked a major manifestation!", color: "#FFAF00"});
        }
        if( warp < 520 && newWarp >= 520)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 560 && newWarp >= 560)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 600 && newWarp >= 600)
        {
            alerts.push({text: timestamp + name + " has been afflicted by a minor mutation!", color: "#F400FD"});
        }
        if( warp < 620 && newWarp >= 620)
        {
            alerts.push({text: timestamp + name + " has suffered a point of exhaustion!", color: "#b7a7a7"});
        }
        if( warp < 640 && newWarp >= 640)
        {
            alerts.push({text: timestamp + name + " has evoked a major manifestation!", color: "#FFAF00"});
        }
        if( warp < 680 && newWarp >= 680)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 700 && newWarp >= 700)
        {
            alerts.push({text: timestamp + name + " has been afflicted by a minor mutation!", color: "#F400FD"});
        }
        if( warp < 720 && newWarp >= 720)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 760 && newWarp >= 760)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 800 && newWarp >= 800)
        {
            alerts.push({text: timestamp + name + " has been afflicted by a major mutation!", color: "#FF0000"});
        }
        if( warp < 820 && newWarp >= 820)
        {
            alerts.push({text: timestamp + name + " has suffered TWO points of exhaustion!", color: "#b7a7a7"});
        }
        if( warp < 840 && newWarp >= 840)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 860 && newWarp >= 860)
        {
            alerts.push({text: timestamp + name + " has evoked a major manifestation!", color: "#FFAF00"});
        }
        if( warp < 880 && newWarp >= 880)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 900 && newWarp >= 900)
        {
            alerts.push({text: timestamp + name + " has been afflicted by a major mutation!", color: "#FF0000"});
        }
        if( warp < 920 && newWarp >= 920)
        {
            alerts.push({text: timestamp + name + " has evoked a major manifestation!", color: "#FFAF00"});
        }
        if( warp < 940 && newWarp >= 940)
        {
            alerts.push({text: timestamp + name + " has triggered a major anomaly!", color: "#00E5FF"});
        }
        if( warp < 960 && newWarp >= 960)
        {
            alerts.push({text: timestamp + name + " has evoked a major manifestation!", color: "#FFAF00"});
        }
        if( warp < 980 && newWarp >= 980)
        {
            alerts.push({text: timestamp + name + " has evoked a major manifestation!", color: "#FFAF00"});
        }
        if( warp < 1000 && newWarp >= 1000)
        {
            alerts.push({text: timestamp + name + " has either died, or suffered a transformative mutation!!!", color: "#B60000"});
        }
    }

    console.log("Alerts found for " + name + ": " + alerts);

    if (alerts.length < 1)
    {
        alerts = null;
    }

    return alerts;
}

router.get("/api/gens/mutantcreatures", isLoggedIn, function(req, res)
{
    res.send(generators.alteredCreature());
});

router.get("/api/gens/dndchar", function(req, res){
    charsGenned++;
    console.log("Generating new character. Total chararacter generated this session: " + charsGenned);
    var char = {
        race:       "",
        class:      "",
        gender:     "",
        alignment:  "",
        background: "",
        str:        "",
        strmod:     "",
        dex:        "",
        dexmod:     "",
        con:        "",
        conmod:     "",
        int:        "",
        intmod:     "",
        wis:        "",
        wismod:     "",
        cha:        "",
        chamod:     ""};

    var race = generators.genRace();
    char.race = race.name;
    char.gender = (dx(2) == 1) ? "Male" : "Female";
    char.alignment = generators.genAlignment();
    var attrs = generators.genAttributes();
    attrs.str += race.str;
    attrs.dex += race.dex;
    attrs.con += race.con;
    attrs.int += race.int;
    attrs.wis += race.wis;
    attrs.cha += race.cha;
    char.class = calcClass(attrs);
    char.background = generators.generateBackground();
    char.str = attrs.str.toString();
    char.dex = attrs.dex.toString();
    char.con = attrs.con.toString();
    char.int = attrs.int.toString();
    char.wis = attrs.wis.toString();
    char.cha = attrs.cha.toString();
    char.strmod = Math.floor((char.str - 10) / 2).toString();
    char.dexmod = Math.floor((char.dex - 10) / 2).toString();
    char.conmod = Math.floor((char.con - 10) / 2).toString();
    char.intmod = Math.floor((char.int - 10) / 2).toString();
    char.wismod = Math.floor((char.wis - 10) / 2).toString();
    char.chamod = Math.floor((char.cha - 10) / 2).toString();     

    res.send(char);
});

function calcClass(attrs)
{
    var possibleClasses = [];
    if (attrs.str > 15 && attrs.con > 13)
    {
        possibleClasses.push("Barbarian");
    }
    if (attrs.dex > 13 && attrs.cha > 15)
    {
        possibleClasses.push("Bard");
    }
    if (attrs.wis > 13 && attrs.con > 11)
    {
        possibleClasses.push("Cleric");
    }
    if (attrs.int > 13 && attrs.wis > 15)
    {
        possibleClasses.push("Druid");
    }
    if ((attrs.str > 13 || attrs.dex > 13) && attrs.con > 11)
    {
        possibleClasses.push("Fighter");
    }
    if (attrs.dex > 15 && attrs.wis > 15)
    {
        possibleClasses.push("Monk");
    }
    if (attrs.cha > 15 && attrs.str > 13)
    {
        possibleClasses.push("Paladin");
    }
    if (attrs.dex > 15 && attrs.wis > 13)
    {
        possibleClasses.push("Ranger");
    }
    if (attrs.dex > 13 && attrs.int > 11)
    {
        possibleClasses.push("Rogue");
    }
    if (attrs.cha > 15 && attrs.con > 13)
    {
        possibleClasses.push("Sorcerer");
    }
    if (attrs.cha > 15 && attrs.wis > 13)
    {
        possibleClasses.push("Warlock");
    }
    if (attrs.int > 13 && attrs.wis > 11)
    {
        possibleClasses.push("Wizard");
    }
    if (possibleClasses.length == 0)
    {
        possibleClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorceror", "Warlock", "Wizard"];
    }
    console.log(possibleClasses);
    return possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
}

function isLoggedIn(req, res, next)
{
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;