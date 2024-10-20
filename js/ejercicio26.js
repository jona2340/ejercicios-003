const palabraMasLarga = (cadena) => 
    cadena.split(' ').reduce((longest, current) => 
        current.length > longest.length ? current : longest, '');

console.log(palabraMasLarga("yo vivo en parangatirimicuaro")); 