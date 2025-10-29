import { prismaClient } from '@repo/db/client';
import express from "express";


const app =  express();

app.use(express.json());

// health check

app.get("/health-check",async (req,res)=>{
    res.send("Live")
})

// Signup endpoint 

app.post("/signup",async (req,res)=>{

    try {
        const username  = req.body.username;
        const password = req.body.password;

        const user = await prismaClient.user.create({
            data:{
                username:username,
                password:password
            }
        })

        return res.status(201).json({
            sucess:true,
            message:"Sign Up successfully",
            data:user.id
        })

    } catch (error) {
        
    }
})


app.listen(3001,()=>{
    console.log("Server Running on the port 3001")
});
