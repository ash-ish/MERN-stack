//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator");
});

app.post("/bmiCalculator", function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    req.send("your BMI ius - " + (weight*weight)/height);

})

app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("addition of two numbers are - " + (num1+num2));
});

app.listen(3000, function(){
    console.log("server is starting on port 3000");
})