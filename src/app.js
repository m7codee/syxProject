//modulo
const mongoose = require("mongoose")
const app = require("express")();
const express = require("express")
const cors = require('cors');
const secure = require('ssl-express-www');


app.enable('trust proxy');

app.set("json spaces",2);
app.use(cors());

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(secure)
app.use(express.static("public"));



mongoose.connect("mongodb+srv://x04:LHj1YTiv3oYcBngH@cluster0.zwxntye.mongodb.net/?retryWrites=true&w=majority").then( () => {
    app.listen(80, () => {
        return console.log(`Server running in port 80, mongodb connections: /db/conn`);
    });
}).catch((err) => {
    console.log(err);
});