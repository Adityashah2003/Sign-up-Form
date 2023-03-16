const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const user = require("./schema");
// const con = require("./db");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html")
})
app.get("/log",function (req,res) {
    res.sendFile(__dirname+"/log.html")
})
app.get("/signup",function (req,res) {
    res.sendFile(__dirname+"/signup.html")
})
app.get("/wc",function (req,res) {
    res.sendFile(__dirname+"/wc.html")
})
app.get("/mem",function (req,res) {
    res.sendFile(__dirname+"/mem.html")
})
app.get("/mc",function (req,res) {
    res.sendFile(__dirname+"/mc.html")
})

// app.post("/",function(req,res){
//     res.send();
// })
app.post("/log",function(req,res){
    const role = req.body.role;
    const username = req.body.username;
    const pass = req.body.pass;
    if(role === "mc"){
        res.redirect('/mc');
    }
    else if( role ==="wc"){
        res.redirect('/wc');
    }
    else if(role ==="mem"){
        res.redirect('/mem');
    }
    res.send();
})
app.post("/signup",function(req,res){
    const role = req.body.role;
    const username = req.body.username;
    const pass = req.body.pass;
    
    // var myData = new user(role,username,pass);
    // myData.save().then(item => {
    //   res.send("item saved to database");
    // })
    // .catch(err => {
    //   res.status(400).send("unable to save to database");
    // });
    res.send();
})

app.listen(3000, function(){
    console.log("Server has started");
});
