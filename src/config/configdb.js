import { MongoClient } from "mongodb"

const uri= 'mongodb+srv://thientai01292:thientai01292@cluster0.e6i03.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



export const connectDB = async () =>{

        const client = new MongoClient(uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })

    try{

        await client.connect()

        await listDatabases(client)

        console.log('connect successfully to server mogo')
    
    }    finally{
        await client.close()
    }
}

const listDatabases = async (client) => {
    const database = await client.db().admin().listDatabases()
    database.databases.forEach(db => console.log(`- ${db.name}`))
  
}
