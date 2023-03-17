const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const user = require("./schema");
const con = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html");
})
app.get("/log",function (req,res) {
    res.sendFile(__dirname+"/log.html");
})
app.get("/signup",function (req,res) {
    res.sendFile(__dirname+"/signup.html");
})
app.get("/wc",function (req,res) {
    res.sendFile(__dirname+"/wc.html");
})
app.get("/mem",function (req,res) {
    res.sendFile(__dirname+"/mem.html");
})
app.get("/mc",function (req,res) {
    res.sendFile(__dirname+"/mc.html");
})

// app.post("/",function(req,res){
//     res.sendFile(__dirname+"/index.html")
// });
app.post("/log", async function(req,res){
    const username = req.body.username;
    const pass = req.body.pass;
    
    try {
        const foundUser = await user.findOne({ userName: username });
        if (!foundUser) {
            res.write("User not found");
        } else {
            if (foundUser.password === pass) {
                if (foundUser.role === "MC") {
                    res.redirect('/mc');
                } else if (foundUser.role === "wc") {
                    res.redirect('/wc');
                } else if (foundUser.role === "mem") {
                    res.redirect('/mem');
                }
            } else {
                res.write("Wrong Password");
            }
        }
    } 
    catch (err) {
        console.error(err);
    }
    res.send();
});

app.post("/signup", function (req, res) {
    const userData = new user({
      role: req.body.role,
      userName: req.body.username,
      password: req.body.pass,
    });
    userData.save()
    .then(() => {
    console.log('Data saved successfully');
    res.redirect('/log');
    })
    .catch((err) => {
    console.error(err);
    });
  });
  

app.listen(3000, function(){
    console.log("Server has started");
});
