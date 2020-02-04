const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("haaloo");
})

app.get("/contact", function(req, res){
    res.send("20ashish15@gmail.com");
});


app.get("/info", function(req, res){
    res.send("meri jank");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});