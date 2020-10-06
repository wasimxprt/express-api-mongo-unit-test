const express = require("express");
const app = express();
const db = require("./config/config")

app.listen(3000, function () {
    console.log("App running at 3000")
})