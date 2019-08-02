var express                 = require("express");
var bodyParser              = require("body-parser");
var mongoose                = require("mongoose");
var passport                = require("passport");
var LocalStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");
var expressSession          = require("express-session");
var methodOverride          = require("method-override");
var moment                  = require("moment");

var app = express();

mongoose.connect("mongodb://"); /*ENTER MONGOOSE CONNECTION STRING*/

/******* Routes *******/
var indexRoutes = require("./routes/index");
var gensRoutes = require("./routes/gens");
var regionsRoutes = require("./routes/regions");
var warpRoutes = require("./routes/warp");
var subregionRoutes = require("./routes/subregions");
var apiRoutes = require("./routes/api");


/******* Nav Structures *******/ 

leftNav = [
    { pageTitle: "Home", pageURL: "/" }
];

adminNav = [
    { pageTitle: "Administration", pageURL: "/admin" },
    { pageTitle: "Generators", pageURL: "/gens" },
    { pageTitle: "Region Manager", pageURL: "/region" },
    { pageTitle: "Warp Tracker", pageURL: "/warptracker" }
]

/******* Express Configuration *******/ 

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({
    secret: "", /*ENTER A SECRET*/
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.leftNav = leftNav;
    res.locals.adminNav = adminNav;
    next();
});

app.set("view engine", "ejs");
app.use(methodOverride("_method"));


/******* Globals ********/
currentUser = false;
adminStatus = false;

/******* Models *******/ 

var User = require("./models/user");

/******* Authentication and Session *******/ 

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(indexRoutes);
app.use(gensRoutes);
app.use(regionsRoutes);
app.use(warpRoutes);
app.use(subregionRoutes);
app.use(apiRoutes);

app.get("/*", function(req, res){
    res.redirect("/");
});

/******* Listener *******/ 

app.listen(3010, function () {
    console.log("DMTools Server has Started!");
});