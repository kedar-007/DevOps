const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    console.log("hello docker")
    res.send("Hello kedar with the docker")
});

app.listen(3000);