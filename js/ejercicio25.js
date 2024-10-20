const eliminarCaracteresEspeciales = (cadena) => 
    cadena.replace(/[^a-zA-Z0-9]/g, '');

console.log(eliminarCaracteresEspeciales("Hola@mundo!"));