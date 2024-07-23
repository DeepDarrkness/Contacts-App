
const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/app/contacts", require("./routes/contactRoutes.js"));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});