const capitalizarFrase = (cadena) => 
    cadena.split(' ')
          .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
          .join(' ');

console.log(capitalizarFrase("me gusta jugar play"));