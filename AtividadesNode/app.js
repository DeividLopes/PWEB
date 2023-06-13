var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.render("home/index");
});

app.get("/historia", (req, res) => {
  res.render("informacao/historia");
});

app.get("/cursos", (req, res) => {
  res.render("informacao/cursos");
});

app.get("/professores", (req, res) => {
  res.render("informacao/professores");
});

app.get("/adicionarUsuario", (req, res) => {
  res.render("admin/adicionar_usuario");
});
