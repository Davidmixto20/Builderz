const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const services = [
    {
        title: "Building Construction",
        description: "Expert construction services with modern equipment.",
        image: "/img/service-1.jpg"
    },
    {
        title: "House Renovation",
        description: "Renovating houses with professional quality.",
        image: "/img/service-2.jpg"
    },
    {
        title: "Architecture Design",
        description: "Creative architectural designs for modern homes.",
        image: "/img/service-3.jpg"
    },
    {
    title: "Interior Design",
    description: "Modern interior designs.",
    image: "/img/service-4.jpg"
    },
    {
    title: "Interior Design",
    description: "Modern interior designs.",
    image: "/img/service-4.jpg"
    }
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("pages/index", { title: "Home", services: services });
});

app.get("/blog", (req, res) => {
    res.render("pages/blog", { title: "Blog" });
});

app.get("/team", (req, res) => {
    res.render("pages/team", { title: "Team" });
});

app.get("/single", (req, res) => {
    res.render("pages/single", { title: "Single Page" });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact", { title: "Contact" });
});

app.get("/service", (req, res) => {
    res.render("pages/service", { title: "Services" });
});

app.get("/about", (req, res) => {
    res.render("pages/about", { title: "About" });
});

app.get("/portfolio", (req, res) => {
    res.render("pages/portfolio", { title: "Portfolio" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

