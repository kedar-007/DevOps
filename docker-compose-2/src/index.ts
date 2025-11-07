import express from 'express';
import { PrismaClient } from '@prisma/client';


const app  = express();
const prismaClient = new PrismaClient();

app.get("/",async (req,res)=>{
    const data = await prismaClient.user.findMany();
    
    res.json({
        message:"get endpoint",
        data
    })
})

app.get("/",async (req,res)=>{
    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString(),
        }
    })
    res.json({
        message:"Post endpoint"
    })
})

app.listen(3000,()=>{
    console.log("server is running on the 3000")
})