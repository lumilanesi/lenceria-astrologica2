


// Función para obtener los parámetros de la URL
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
    pelicula: "Titanic",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen2.jpg",
    titulo: "Objeto 2",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Rapido y Furioso",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen3.jpg",
    titulo: "Objeto 3",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Diario de una pasion/The notebook",
    domingo: "Merienda con amigas"
  },
  {
    imagen: "Imagenes-fondo/Imagen4.jpg",
    titulo: "Objeto 4",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Rapido y Furioso",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen5.jpg",
    titulo: "Objeto 5",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Titanic",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen6.jpg",
    titulo: "Objeto 6",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Diario de una pasion/The notebook",
    domingo: "Merienda con amigas"
  },
  {
    imagen: "Imagenes-fondo/Imagen7.jpg",
    titulo: "Objeto 7",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Harry Potter",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen8.jpg",
    titulo: "Objeto 8",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Rapido y Furioso",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen9.jpg",
    titulo: "Objeto 9",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Titanic",
    domingo: "Merienda con amigas"
  },
  {
    imagen: "Imagenes-fondo/Imagen10.jpg",
    titulo: "Objeto 10",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Diario de una pasion/The notebook",
    domingo: "Mandar mensajito al chongo/novio"
  },
  {
    imagen: "Imagenes-fondo/Imagen11.jpg",
    titulo: "Objeto 11",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Titanic",
    domingo: "Netflix and chill"
  },
  {
    imagen: "Imagenes-fondo/Imagen12.jpg", 
    titulo: "Objeto 12",
    signo: ["Aries", "Leo", "Sagitario", "Tauro", "Virgo", "Capricornio","Geminis", "Libra", "Acuario","Cancer", "Escorpio", "Piscis"],
    pelicula: "Harry Potter",
    domingo: "Mandar mensajito al chongo/novio"
  },
];



  let objetoElegido = objetos.find(objeto => {
    return objeto.signo.includes(signo) && objeto.domingo === domingo && objeto.pelicula === pelicula;
  });

  if (objetoElegido) {
    let divResultado = document.getElementById('resultado');

    let title = document.createElement('h3'); // Creas un nuevo elemento h3 (o el elemento que prefieras) que es el titulo del objeto!
    title.textContent = objetoElegido.titulo; // Asignas el título del objeto al nuevo elemento el que aparece en el html fin

    title.className = 'titulo'; // le asigno la clase titulo para poder formatearlo en el css

    divResultado.appendChild(title); 

    let img = document.createElement('img');
    img.src = objetoElegido.imagen;
    img.alt = objetoElegido.titulo;
    img.className = "imagen-resultado";

    divResultado.appendChild(title); // Añades el título al div 'resultado'
    divResultado.appendChild(img);
  }
});

/*
¿Cuál es tu lugar ideal para una cita?
a) Cena elegante en un restaurante de lujo
b) Un paseo al aire libre en un parque o la playa
c) Una noche de películas en casa
d) Cervecita en el happy hour

¿Si tuvieses que elegir un color para vestirte el resto de tu vida, cual eligirías?
a) Negro
b) Rojo
c) Nude/Beige
d) Rosa

¿Cuál sería tu actividad ideal para el fin de semana?
a) Viaje a una ciudad cosmopolita
b) Retiro de yoga en la naturaleza
c) Fiesta con amigos
d) Maratón de series en Netflix

¿Cual cancíon de Britney preferís?
a) Hit me baby one more time! de Britney Spears
b) Toxic
c) I'm a slave for you
d) Stronger

Si fueras una celebridad, ¿cuál sería tu estilo de moda?
a) Glamoroso como Jennifer Lopez
b) Clásico como Audrey Hepburn
c) Casual chic como Jennifer Aniston
d) Único y audaz como Lady Gaga
*/

