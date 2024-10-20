const frecuenciaCaracteres = (cadena) => 
    [...cadena].reduce((acc, caracter) => {
        acc[caracter] = (acc[caracter] || 0) + 1;
        return acc;
    }, {});

console.log(frecuenciaCaracteres("abbccc"));