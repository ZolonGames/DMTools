var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
    
    currentUser = req.user;

    res.render("home", 
    {   pageTitle: "Home"
    });
});

router.get("/register", function(req, res){

    var enabled = false;
    currentUser = req.user;
    if(!currentUser){
        res.redirect("/");
    }

    res.render("register", 
    {   pageTitle: "Register",
        enabled: enabled
    });
});

router.post("/register", function(req, res){

    res.send("Registrations are disabled at this time.");
    /*
    User.register(new User({username: req.body.username, admin: false}), req.body.password, function(err, user){
        if (err){
            console.log(err);
            return res.render("register", 
            {   pageTitle: "Register",
                leftNav: leftNav,
                adminNav: adminNav,
            });
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/");
        });
    }); */
});


router.get("/login", function(req, res){

    currentUser = req.user;

    if(currentUser){
        res.redirect("/");
    }

    res.render("login", 
    {   pageTitle: "Log In"
    });
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
    }) , function(req, res){

});

router.get("/logout", isLoggedIn, function(req, res){
    req.logout();
    res.redirect("/");
});

router.get("/admin", isLoggedIn, function(req, res){
    currentUser = req.user;
    
    if(currentUser)
    {
        if (currentUser.admin)
        {
            User.find({}, function(err, users){
                if(err)
                {
                    console.log("Error encountered pulling records from DB");
                }
                else
                {
                    console.log("Retrieved Users from DB" + users);
                }
                res.render("admin", {
                    pageTitle: "Administration",
                    users: users});
            });
        }
        else 
        {
            res.render("admin", 
            {   pageTitle: "Administration"
            });
        }
    }
});

function isLoggedIn(req, res, next)
{
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;