// OBJETO DATE
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDay());

//TIMESTAMP: 01 Enero 1970 -> Actualidad
console.log(fechaActual.getTime());
console.log(Date.now());
console.log(+fechaActual)

let fechaConTimestamp = new Date(1627033033900);
console.log(fechaConTimestamp);

//STRING
// let fechaConString = new Date("2021 jan 23 23:00:14");
// console.log(fechaConString);

let fechaConString = new Date("jan 23 2021");
console.log(fechaConString);

// Date(año, mes, fecha, horas, minutos, segundos, ms)
