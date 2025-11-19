import express from "express";
import type { Request,Response,NextFunction } from "express";
import client from "prom-client";

//Prometheus counter metrics

const requestCounter = new client.Counter({
    name:'http_requests_total',
    help:'Total Number of HTTP Requests',
    labelNames:['method','route','status_code']
})

// client.register.registerMetric(requestCounter);

//Guage

const activeRequestGauge = new client.Gauge({
    name:'active_request',
    help:'Number of active requests'
})

//Histogram
export const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000] // Define your own buckets here
});

//Middleware
function middleware(req:Request,res:Response,next:NextFunction){
    activeRequestGauge.inc();
    const startTime = Date.now();

    res.on('finish',() =>{
        const endTime = Date.now();
        const routePath = req.route?.path || req.path;
        console.log(`Time it took is ${endTime - startTime} ms for method ${req.method} for route ${req.route.path}`)
        //Increament the request counter

        requestCounter.inc({
            method:req.method,
            route:routePath,
            status_code:res.statusCode
        });


        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, endTime-startTime);

        activeRequestGauge.dec();

    })

    next();
    
}

const app = express();


app.use(middleware);

//CPU
app.get("/cpu",async (req,res)=>{

    await new Promise (s => setTimeout(s,1000))
    res.json({
        message:"cpu"
    })
})

app.get("/users",(req,res) =>{
    res.json({
        message:"user"
    })
})

//METRICS

app.get("/metrics",async (req,res)=>{
    const metrics = await client.register.metrics();
    console.log("Hello",await client.register.metrics());
    res.set('Content-Type',client.register.contentType);
    res.end(metrics);

})


app.listen(3000,()=>{
    console.log("Server is running on the port 3000")
})