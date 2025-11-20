import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup',async (c) =>{
  const prismaClient = new PrismaClient({
    // @ts-ignore
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  const user = await prismaClient.user.create({
    data:{
      name:body.name,
      password:body.password,
      email:body.email
    }
  })
  return c.json({
    message:"user is created",
    data:user
  })
})


app.post('/api/v1/signin',(c) =>{
  return c.json({
    message:"user is kedar"
  })
})


app.post('/api/v1/todo',(c) =>{
  return c.json({
    message:"user is kedar"
  })
})

app.get('/api/v1/todo',(c) =>{
  return c.json({
    message:"user is kedar"
  })
})


export default app
