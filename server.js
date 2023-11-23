const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Allison's backend application");
});

app.get("/allison",(req,res)=>{
    res.send("Hello Allison!");
});

app.listen(3000,()=>{
    console.log("Listening");
});