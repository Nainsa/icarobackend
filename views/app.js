const express = require("express");
const path = require("path");

const VIEWS_PATH = path.join(__dirname, "views");
const PORT = 3000;

apps = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(VIEWS_PATH, "index.html"));
});
app.get("/productos", (req, res) => {
    res.sendFile(path.join(VIEWS_PATH, "productos.html"));
});
app.get("/producto/1", (req, res) => {
    res.sendFile(path.join(VIEWS_PATH, "producto/1.html"));
});

app.listen(PORT, () => console.log('Server running on port: ${PORT}'));
