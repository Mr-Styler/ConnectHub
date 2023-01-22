const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const csrf = require('csurf');
const passport = require("passport");
const session    = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const store = new MongoDBStore({
    uri: "mongodb://localhost/ConnectHub",
    collection: 'sessions'
})

const errorController = require("./controllers/error");
const authRoute = require('./routes/auth');
const publicRoute = require('./routes/public');
const adminRoute = require('./routes/admin');

const csrfProtection = csrf();

app.use(express.json());
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.use(session({
    secret: "Connecting students within and outside",
    resave: false,
    saveUninitialized: false,
    store: store,
}))



app.use(csrfProtection);

app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//     console.log(req.isAuthenticated())
//     if (req.isAuthenticated()) {
//         return next()
//     }
//     res.redirect("/login")
// })

app.use("/admin", adminRoute)
app.use(authRoute)
app.use(publicRoute)

module.exports = app;