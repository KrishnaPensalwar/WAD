const express = require('express');

const {getDb , connectToDatabase} = require('./mongodb.js');

const app = express();

app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.get('/users', async(req,res)=>{
    const db = await getDb();
    const users = await db.collection('users').find().toArray();
    res.send(users);
})

app.post('/users', async(req,res)=>{
    const body = req.body;
    const db = await getDb();
    const result = await db.collection('users').insertOne(body);
    res.send(result);
})

app.delete('/users/:name', async(req,res)=>{
    const name =  req.params.name

    const db = await getDb();
    const result = await db.collection('users').deleteOne({name});
    res.send(result);
})

app.patch('/users/:name', async(req,res)=>{
    const name =  req.params.name
    const body = req.body;
    const db = await getDb();
    const result = await db.collection('users').updateOne({name},{$set:body});
    res.send(result);
})


connectToDatabase().then(()=>{
        app.listen(3000,()=>{
        console.log("Server is started");
    })
    })
    .catch(()=>{
        console.log("Server is not started");
    })







