const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Flamethrower:Aditya2003@atherbc.4unv7dz.mongodb.net/atherdb?retryWrites=true&w=majority",
{useNewUrlParser:true,useUnifiedTopology:true});

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;

