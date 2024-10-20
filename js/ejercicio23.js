const truncarCadena = (cadena, limite) => 
    cadena.length > limite ? cadena.substring(0, limite) + '...' : cadena;

console.log(truncarCadena("me gusta caminar en la lluvia", 10)); 