const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose")
const UserNext = require("./models")
const bodyParser = require("body-parser")
const cors = require("cors")
mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://myMongoMind:Alfred08@secondmongothang.lro175c.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("mongoDB successfully conected")
    }).catch((err) => {
        console.log("Unsuccessfull, here the error: ")
        console.log(err)
    })

const app = express();


// Define the absolute path to your certificate and private key
const certPath = path.join('C:', 'Users', 'mo', 'cert.pem');
const keyPath = path.join('C:', 'Users', 'mo', 'key.pem');

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
            res.json({userAuth: "user-auth-1999"})
        })
        .catch(next)
})

// Create an HTTPS server
https.createServer(options, app).listen(3001, () => {
  console.log('HTTPS server running on port 3001');
});


app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
  });