const mongoose = require('mongoose')
const app = require('./app');

mongoose.connect("mongodb://localhost/ConnectHub").then(()=> console.log("DB connection successfull")).catch((err)=>{console.log(err)});

app.listen(2525, ()=>{
    console.log(`Running ConnectHub on port: 2525`)
})