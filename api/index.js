const express = require("express")
const cors = require('cors');
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
require('dotenv').config()
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json())


app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}))



mongoose.connect(process.env.MONGO_URL)

app.get("/test", (req, res) => {
    res.json("okay")
})

app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    bcrypt.hash(password, saltRounds, async (err, hashPassword) => {
        const userDoc = await User.create({
            username,
            email,
            password: hashPassword
        })
        res.json(userDoc)

        if (err) {
            res.status(400).json(err)
        }
    });

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const userFound = await User.findOne({ email: email })

        bcrypt.compare(password, userFound.password, function (err, result) {

            console.log(result)
            if (err) {
                res.status(400).json(err)
            }
            if (result === true) {
                res.json("user found")
            } else {
                res.status(401).json("Wrong credentials")
            }
        })

    } catch (error) {
        res.status(400).json(error)
    }
})


app.listen(3000)

