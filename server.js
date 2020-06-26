const express = require("express");
const mongojs = require("mongojs");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const databaseUrl = "FitnessDB";
const collections = [""];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error: ", error);
});

app.get("/", (req, res) => {
    res.send(index.html);
});