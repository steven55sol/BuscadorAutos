// variables

const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

//eventos

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(); // mostrar los autos al cargar

    //llena las opciones de años
    llenarSelect();

})



//funciones
function mostrarAutos(){

    autos.forEach(auto => {

        const {marca, modelo, year, puertas,transmision, precio, color} = auto;

        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} puertas - transmision: ${transmision} - precio: ${precio} - color: ${color}
        `;

        //insertar en el html
        resultado.appendChild(autoHTML)

    });
}

//Generar los años del Select

function llenarSelect(){
     
    for(let i = max; i > min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion) //Agrega las opciones del ano al select
    }
}

