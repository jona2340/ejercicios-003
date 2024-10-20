const convertirASnakeCase = (cadena) => 
    cadena.toLowerCase().replace(/ /g, '_');

console.log(convertirASnakeCase("Hola Mundo"));