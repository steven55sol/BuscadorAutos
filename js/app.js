// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda

const datosBusqueda = {
  marca : "",
  year : "",
  minimo : "",
  maximo : "",
  puertas : "",
  transmision : "",
  color : "",
}

//eventos

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos); // mostrar los autos al cargar

    //llena las opciones de años
    llenarSelect();

})


//EventListener para los select de busqueda

marca.addEventListener('change', completedatos)
year.addEventListener('change', completedatos)
minimo.addEventListener('change', completedatos)
maximo.addEventListener('change', completedatos)
puertas.addEventListener('change', completedatos)
transmision.addEventListener('change', completedatos)
color.addEventListener('change', completedatos)


function completedatos(e){
    datosBusqueda[e.target.id] = e.target.value;

    filtrarAuto();
}



//funciones
function mostrarAutos(autos){

    limpiarHtml();  //Limpiar el Html previo

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

function limpiarHtml(){
   while(resultado.firstChild){
     resultado.removeChild(resultado.firstChild);
   }
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

//Funcion para filtrar autos dependendo de los select
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtraryear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmisiones).filter(filtrarColor);

    //console.log(resultado)
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function noResultado(){

    limpiarHtml();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent='No Hay Resltado a su Busqueda..';
    resultado.appendChild(noResultado);
}

function filtraryear(auto){
    if(datosBusqueda.year){
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === parseInt(datosBusqueda.puertas)
    }
    return auto;
}

function filtrarTransmisiones(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}