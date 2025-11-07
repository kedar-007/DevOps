const express = require("express");

const app = express();

app.get("/check-health",(req,res) =>{
    res.send("Running");
})

app.listen(3000,()=>{
    console.log("Server is running on the port 3000")
})

console.log("ENV VARIABLE");
console.log(process.env.DATABASE_URL);