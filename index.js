var express = require("express");
var app = express();
var path = require('path');

app.get("/", inicio);
app.get("/cursos", cursos);

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('views'));

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/views/home.html");
}

function cursos (peticion, resultado)
{
  resultado.send("Estos son los <strong>cursos</strong>");
}

const port = process.env.PORT || 3001;
app.listen(port,() =>console.log('Servidor corriendo en el puerto ${port}'));