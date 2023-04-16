import { MongoClient } from "mongodb"
import connection from './../../../middleware/mongoose';

async function handler(req, resp){

    const {heading, data, netChange} = req.body;
    if (req.method === 'POST') {

        const client = await MongoClient.connect(`${process.env.MONGODB_URI}`)
        const db = client.db("test")
        const collection = db.collection("data")

        // make a post request to the database
        const result = await collection.insertOne({heading, data, netChange})
        client.close()
        return resp.status(200).json({
            result
        })


    } else if (req.method === 'GET') {

        const client = await MongoClient.connect(`${process.env.MONGODB_URI}`)
        const db = client.db("test")
        const collection = db.collection("data")

        const result = await collection.find({}).toArray()
        client.close()
        return resp.status(200).json({
            result
        })

    } else {
        return resp.status(405).json({message: 'Method not allowed'})
    }
}
export default connection(handler)