const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    console.log("hello docker")
    res.send("Hello kedar with the docker")
});
app.get("health-chcek", (req, res) => {
    res.send("Running")
  })
app.listen(3000);