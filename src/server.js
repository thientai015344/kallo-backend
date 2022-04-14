import express from "express";
import { connectDB } from "./config/configdb.js";
import {api1} from "./routes/router.js"




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
    const app = express();

    const hostname = 'localhost';
    const port = 4000;

    app.use(express.json())

    app.use('/v1', api1)



    app.listen(port,hostname, ()=>{
        console.log('listening on port',hostname,port);
    })

}