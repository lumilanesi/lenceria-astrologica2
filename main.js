import './style.css'

window.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.grid-container img');
  var index = 0;

  setInterval(function() {
    // Incrementa el índice de la imagen y reinicia si llega al final
    index = (index + 1) % images.length;

    // Genera valores aleatorios para las nuevas posiciones X e Y
    var posX = Math.floor(Math.random() * 4) + 1;
    var posY = Math.floor(Math.random() * 10) + 1;

    // Aplica la transformación CSS para cambiar la posición de la imagen
    images[index].style.gridColumn = posX;
    images[index].style.gridRow = posY;
  }, 200);
});

const objetos = [
  {
    imagen: "Imagenes-fondo/Imagen1.jpg",
    titulo: "Objeto 1",
    signo: ["Aries", "Leo", "Sagitario"],
    pelicula: "Titanic",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen2.jpg",
    titulo: "Objeto 2",
    signo: ["Tauro", "Virgo", "Capricornio"],
    pelicula: "Rapido y Furioso",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen3.jpg",
    titulo: "Objeto 3",
    signo: ["Geminis", "Libra", "Acuario"],
    pelicula: "Diario de una pasion/The notebook",
    domingo: "Merienda con amigas"
  },
  {
    imagen: "Imagenes-fondo/Imagen4.jpg",
    titulo: "Objeto 4",
    signo: ["Cancer", "Escorpio", "Piscis"],
    pelicula: "Rapido y Furioso",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen5.jpg",
    titulo: "Objeto 5",
    signo: ["Aries", "Leo", "Sagitario"],
    pelicula: "Titanic",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen6.jpg",
    titulo: "Objeto 6",
    signo: ["Tauro", "Virgo", "Capricornio"],
    pelicula: "Diario de una pasion/The notebook",
    domingo: "Merienda con amigas"
  },
  {
    imagen: "Imagenes-fondo/Imagen7.jpg",
    titulo: "Objeto 7",
    signo: ["Geminis", "Libra", "Acuario"],
    pelicula: "Harry Potter",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen8.jpg",
    titulo: "Objeto 8",
    signo: ["Cancer", "Escorpio", "Piscis"],
    pelicula: "Rapido y Furioso",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen9.jpg",
    titulo: "Objeto 9",
    signo: ["Aries", "Leo", "Sagitario"],
    pelicula: "Titanic",
    domingo: "Merienda con amigas"
  },
  {
    imagen: "Imagenes-fondo/Imagen10.jpg",
    titulo: "Objeto 10",
    signo: ["Tauro", "Virgo", "Capricornio"],
    pelicula: "Diario de una pasion/The notebook",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen11.jpg",
    titulo: "Objeto 11",
    signo: ["Geminis", "Libra", "Acuario"],
    pelicula: "Titanic",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen12.jpg",
    titulo: "Objeto 12",
    signo: ["Cancer", "Escorpio", "Piscis"],
    pelicula: "Harry Potter",
    domingo: "Mandar mensajito al chongo/novio"
  },
];

// Configuración del servidor con Express.js
const express = require('express');
const app = express();

// Configurar el middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para guardar las respuestas en el servidor
app.post('/guardar-respuestas', (req, res) => {
  const { signo, domingo, pelicula } = req.body; // Obtener las respuestas del cuerpo de la solicitud

  // Aquí puedes realizar la lógica para guardar las respuestas en la base de datos
  // Por ejemplo, utilizando un ORM (Object-Relational Mapping) o consultas a la base de datos

  // Respuesta de éxito
  res.status(200).json({ message: 'Respuestas guardadas correctamente' });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});