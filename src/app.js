const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/blog", (req, res) => {
    res.render("blog");
})
app.get("/team", (req, res) => {
    res.render("team");
})
app.get("/single", (req, res) => {
    res.render("single");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("/service", (req, res) => {
    res.render("service");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/portfolio", (req, res) => {
    res.render("portfolio");
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});