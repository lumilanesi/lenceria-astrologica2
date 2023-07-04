function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Obtiene los parámetros de la URL
let signo = getParameterByName('signo');
let domingo = getParameterByName('domingo');
let pelicula = getParameterByName('pelicula');

document.addEventListener('DOMContentLoaded', function () {
  // Obtiene todos los enlaces en la página
  let links = document.querySelectorAll('a');

  // Itera sobre cada enlace y reemplaza 'XXX' y 'YYY' con los parámetros obtenidos
  links.forEach(link => {
    let href = link.getAttribute('href');
    href = href.replace('XXX', encodeURIComponent(signo ? signo : ''));
    href = href.replace('YYY', encodeURIComponent(domingo ? domingo : ''));
    link.setAttribute('href', href);
  });


const objetos = [
  {
    imagen: "Imagenes-fondo/Imagen1.jpg",
    titulo: "Less Leila Print",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen2.jpg",
    titulo: "Less Micaela",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen3.jpg",
    titulo: "Less Fru Fru",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen4.jpg",
    titulo: "Less Carolina",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen5.jpg",
    titulo: "Less Nina",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen6.jpg",
    titulo: "Less Momi",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen7.jpg",
    titulo: "Less Mikonos",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen8.jpg",
    titulo: "Less Aitana",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen9.jpg",
    titulo: "Less Tini",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen10.jpg",
    titulo: "Less Delfina",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen11.jpg",
    titulo: "Less Berlin",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
  {
    imagen: "Imagenes-fondo/Imagen12.jpg", 
    titulo: "Less Grecia",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: ["Zapatillas", "Botas", "Tacos", "Chatitas"],
    domingo: ["Tarjeta", "Leer mente", "Futuro"]
  },
];


let objetosCoincidentes = objetos.filter(objeto => {
  return objeto.signo.includes(signo) && objeto.domingo.includes(domingo) && objeto.pelicula.includes(pelicula);
});

if (objetosCoincidentes.length > 0) {
  let objetoAleatorio = objetosCoincidentes[Math.floor(Math.random() * objetosCoincidentes.length)];

  let divResultado = document.getElementById('resultado');

  let title = document.createElement('h3');
  title.textContent = objetoAleatorio.titulo;
  title.className = 'titulo';

  divResultado.appendChild(title);

  let img = document.createElement('img');
  img.src = objetoAleatorio.imagen;
  img.alt = objetoAleatorio.titulo;
  img.className = "imagen-resultado";

  divResultado.appendChild(img);
}
});
/*
¿Cuál es tu lugar ideal para una cita?
a) Cena en un restaurante de lujo
b) Mates en la costa
c) Netflix and chill
d) Barcito en happy hour

¿Cuál sería tu actividad ideal para el fin de semana?
a) Viajecito a Capital o a la costa
b) Retiro en la naturaleza
c) Juntada con amigos
d) Cine y pochoclos

¿Con quien te irias de fiesta?
a) Tini y Maria becerra
b) L gante con La Joaqui
c) Susana Gimenez y Moria
d) Santiago del Moro y Barassi

Si fueras una celebridad, ¿cuál sería tu estilo de moda?
a) Glamoroso como Jennifer Lopez
b) Clásico como Audrey Hepburn
c) Casual chic como Jennifer Aniston
d) Único y audaz como Lady Gaga

Que infusion preferis para la tarde
a) Un latte suave
b) Un expresso fuerte
c) Un capuccino
d) Un tecito





*/

