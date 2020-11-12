import {autos} from '../js/db.js';
import {marca, year, minimo, maximo, puertas, transmision,
        color, resultado, max, min} from '../js/selectores.js';
//generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)//muestra los autos al cargar

    //llena las opciones de anos
    llenarSelect()
})

//event listener para los select de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
})

year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value;

    filtrarAutos();
})

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
    filtrarAutos();
})

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
})

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
})

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAutos();
})

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
})

//mostrar autos del arreglo

function mostrarAutos(autos){

    LimpiarHTML();

   autos.forEach(auto => {
       const autoHTML = document.createElement('p')
        const {marca, modelo, year, precio, puertas, transmision, color} = auto

       autoHTML.innerHTML = `
        <p>
            Marca: ${marca} - Modelo: ${modelo} - year: ${year} -
            Puertas: ${puertas} - transmision: ${transmision} - 
            Precio: ${precio} - Color: ${color}
        </p>
       `;
       resultado.appendChild(autoHTML)
   })  
}

//limpiar html
function  LimpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        let option = document.createElement('option')
        option.value = i;
        option.innerHTML = i;
    
        year.appendChild(option)
    }
}

//filtrar los autos
function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter
    (filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor).filter
    (filtrarMinimo).filter(filtrarMaximo)
    
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
  }
  
  function noResultado(){

      LimpiarHTML();

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'no hay resultados';
    resultado.appendChild(noResultado)
  }

  //programacion funcional
  function filtrarMarca(auto){
      const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }

    return auto;
  }
  
  function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    }

    return auto;
  }

  function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas ===  parseInt(puertas) ;
    }

    return auto;
  }

  function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }

    return auto;
  }

  function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }

    return auto;
  }

  function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio <= parseInt(minimo);
    }

    return auto;
  }

  function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio >= parseInt(maximo);
    }

    return auto;
  }