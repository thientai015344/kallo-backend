import express from "express";
import { connectDB } from "./config/configdb.js";



const app =express();

const hostname = 'localhost';
const port =4000;

connectDB().catch(console.log)

app.get('/', (req, res )=> {
    res.end('<h1>hello</h1>')
})

app.listen(port,hostname, ()=>{
    console.log('listening on port',hostname,port);
})