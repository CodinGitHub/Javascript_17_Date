// Date()
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDay());

//TIMESTAMP
console.log(fechaActual.getTime());
console.log(Date.now());
console.log(+fechaActual)

let fechaConTimestamp = new Date(1627033033900);
console.log(fechaConTimestamp);

//STRING
let fechaConString = new Date("2021 jan 23");
console.log(fechaConString);

// Date(año, mes, fecha, horas, minutos, segundos, ms)
