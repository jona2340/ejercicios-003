const convertirACamelCase = (frase) => 
    frase.split(' ')
         .map((palabra, index) => index === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1))
         .join('');

console.log(convertirACamelCase("me gusta jugar")); 