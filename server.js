
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Hi Mom!");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});