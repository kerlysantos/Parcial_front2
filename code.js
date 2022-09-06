/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  
  alert ("Hola Bienvenidos a mi Portal")
datosPersona.nombre = prompt (" Como Estas? Por Favor, Ingrese su Nombre")

    function ObtenerEdad(){
      let esInvalido;
      let eleccionUsuario;

      do{
        datosPersona.edad =  2022 - parseInt(prompt ( " Por Favor Ingresa tu fecha de Nacimiento"));
        esInvalido = isNaN(datosPersona.edad)
          if (esInvalido) {
                alert("La fecha igresada no es valida, Por favor coloque una correcta")

    } 
    } while (esInvalido)

    return eleccionUsuario;

}

  ObtenerEdad()
datosPersona.ciudad = prompt("Ingrese su ciudad")
datosPersona.interesPorJs = prompt("tienes interes por JavaScript?")
}

function renderizarDatosUsuario() {
  
  obtenerDatosDelUsuario();
  
  
  let nombre = document.getElementById("nombre");
  nombre.innerText = datosPersona.nombre;

  let edad = document.getElementById("edad");
  edad.innerText = datosPersona.edad; 

  let ciudad = document.getElementById ("ciudad");
  ciudad.innerText = datosPersona.ciudad;

  let interesPorJs = document.getElementById ("javascript");
  interesPorJs.innerText = datosPersona.interesPorJs;
    
}


function recorrerListadoYRenderizarTarjetas() {
  
  let fila = document.getElementById ('fila');
  fila.innerHTML = '';
  listado.forEach (materia => {
    fila.innerHTML+= `
    <div class = "caja">
    <img src = "${materia.imgUrl}" alt="${materia.lenguajes}">
    <p>lenguajes:${materia.lenguajes}</p> 
    <p> Bimestre:${materia.bimestre}</p>
    </div>
    `
})

}

function alternarColorTema() {
  
  document.querySelector("body").classList.toggle("dark");
  body.classlist.toggle("alternarColorTema");
}


document.addEventListener('keydown', (event) => {
if (event.key === 'f') {
  const p = document.getElementById('sobre-mi');
  p.classList.remove('oculto');
}

});