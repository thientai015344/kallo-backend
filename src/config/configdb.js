import { MongoClient } from "mongodb"

const url= 'mongodb+srv://thientai01292:thientai01292@cluster0.e6i03.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


let dbInstant = null;
export const connectDB = async () =>{

        const client = new MongoClient(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })

   

        await client.connect()

        dbInstant = client.db('trello')

     
   
}

export const getDB = () =>{
    if(!dbInstant) throw new Error('Must connect to database first')
    return dbInstant
}


// const listDatabases = async (client) => {
//     const database = await client.db().admin().listDatabases()
//     database.databases.forEach(db => console.log(`- ${db.name}`))
  
// }
