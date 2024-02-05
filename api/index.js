const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose")
const {UserNext, Persons} = require("./models")
const bodyParser = require("body-parser")
const cors = require("cors")
mongoose.Promise = global.Promise

const certPath = path.join('C:', 'Users', 'mo', 'cert.pem');
const keyPath = path.join('C:', 'Users', 'mo', 'key.pem');
console.log(certPath)

mongoose.connect("mongodb+srv://myMongoMind:Alfred08@secondmongothang.lro175c.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("mongoDB successfully conected")
    }).catch((err) => {
        console.log("Unsuccessfull, here the error: ")
        console.log(err)
    })

const app = express();


// Read the certificate and private key
const options = {
  cert: fs.readFileSync(certPath),
  key: fs.readFileSync(keyPath)
};

app.use(cors())
app.use(bodyParser.json())
// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

app.post("/api", (req, res, next)=>{
    const userProps = req.body
    UserNext.create(userProps)
        .then(user => {
            res.json(user)
        })
        .catch(next)
})
app.post("/api/loggIn", (req, res, next)=>{
    const {email, password} = req.body
    UserNext.findOne({email: email})
        .then(user => 
            user.password === password
            ? res.json(user)
            : res.json({"value":null})
        )
        .catch(()=>res.json({"value":null}))
})
app.get("/api/persons", (req, res, next)=>{
    Persons.find({})
        .then(persons=>res.json(persons))
})
app.post("/api/persons", (req, res, next)=>{
    const personprops = req.body
    Persons.create(personprops)
        .then(persons=>res.json(persons))
        .catch(err=> res.json(err))
})
app.get("/api/persons/:id", (req,res,next)=>{
    const {id} = req.params
    Persons.findById(id)
        .then(person => res.json(person))
})
app.delete("/api/persons/:id", (req,res,next)=>{
    const {id} = req.params
    Persons.deleteOne({_id: id})
        .then(person => res.json({"Success":person}))
        .catch(err => res.send(err))
})

// Create an HTTPS server
https.createServer(options, app).listen(3001, () => {
  console.log('HTTPS server running on port 3001');
});


app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
  });