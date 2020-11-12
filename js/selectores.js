const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//contenedor para los resultados
const resultado = document.querySelector('#resultado')


const max = new Date().getFullYear()
const min = max - 10;

export {marca, year, minimo, maximo, puertas, transmision, color, resultado, max, min}