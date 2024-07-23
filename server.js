
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use("/app/contacts", require("./routes/contactRoutes.js"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});