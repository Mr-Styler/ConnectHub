const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const authRoute = require('./routes/auth');
const publicRoute = require('./routes/public');
const adminRoute = require('./routes/admin');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.use("/admin", adminRoute)
app.use(authRoute)
app.use(publicRoute)

module.exports = app;