const comprimirCadena = (cadena) => cadena.replace(/(.)\1+/g, '$1');

console.log(comprimirCadena("aabbccdde"));