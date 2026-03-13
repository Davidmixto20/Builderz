import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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
app.set("views", path.join(__dirname, "./views/pages"));

app.get("/", (req, res) => {
    res.render("index", { title: "Home", services: services });
});

app.get("/blog", (req, res) => {
    res.render("blog", { title: "Blog" });
});

app.get("/team", (req, res) => {
    res.render("team", { title: "Team" });
});

app.get("/single", (req, res) => {
    res.render("single", { title: "Single Page" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

app.get("/service", (req, res) => {
    res.render("service", { title: "Services" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/portfolio", (req, res) => {
    res.render("portfolio", { title: "Portfolio" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

