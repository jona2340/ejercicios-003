const reemplazarTodas = (cadena, palabraVieja, palabraNueva) => 
    cadena.replaceAll(palabraVieja, palabraNueva);

console.log(reemplazarTodas("hola hola", "hola", "adiós"));