import { config as env } from "dotenv";
if(process.env.NODE_ENV !== "production") {
    env();
}

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT);