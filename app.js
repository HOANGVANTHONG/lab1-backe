const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "xin chao ban da den voi ung dung quan ly danh ba!"});
});

module.exports = app;

