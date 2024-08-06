import { config as env } from "dotenv"
import express from "express"

if(process.env.NODE_ENV !== "production") {
    env();
}

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(process.env.PORT)