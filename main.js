


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




