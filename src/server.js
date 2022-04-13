import express from "express";
import { connectDB } from "./config/configdb.js";
import {BoardModell} from "./models/BoardModel.js"





connectDB()
    .then(() => {
        console.log('connected successfully to database');
    })
    .then(()=>
        bootServer())

    .catch(error =>{
        console.error(error)
        process.exit(1)
    })

const bootServer =() =>{
    const app =express();

    const hostname = 'localhost';
    const port = 4000;

    app.get('/test', async (req, res )=> {

        let fakedata ={
            title: 'Test'
        }
       const newboards = await BoardModell.createNew(fakedata)
       console.log('newboard',newboards);

        res.end('<h1>hello</h1>')   
    })


    app.get('/', (req, res )=> {
        res.end('<h1>hello</h1>')
    })

    app.listen(port,hostname, ()=>{
        console.log('listening on port',hostname,port);
    })

}