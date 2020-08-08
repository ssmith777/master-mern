// server.js
const express = require("express");
const app = express();
const User = require("./src/User.model");
const connectDb = require("./src/connection");
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8080;

app.use(cors());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
    const users = await User.find();

    res.json(users);
});

app.post("/user-create", async (req, res) => {
    console.log("test: " + req.body.name);  

    const user = new User({ username: req.body.name });

    await user.save().then(() => console.log("User created"));  

    res.send("User created \n");
});

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});