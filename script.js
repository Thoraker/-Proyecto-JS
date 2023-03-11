var arreglo = [
    ['Un perro ', 'Mi Abuelita ', 'Una tortuga ', 'Mi cacatúa ', 'Mi vecino '], 
    ['se comió ', 'meó ', 'me rompió ', 'se robó ', 'se llevo '], 
    ['mi calcetín ', 'mi móvil ', 'mi billetera ', 'mis llaves ', 'mi trabajo '], 
    ['al salir de casa.', 'hace poco.', 'cuando no miraba.', 'en la hora de mi almuerzo.', 'cuando estaba rezando.']
];

window.onload = () => {
    var chiva= '';
    for (let i = 0; i < arreglo.length ; i++) {
        let rand = Math.floor(Math.random()*arreglo[i].length);
        chiva += arreglo[i][rand];
    }

    let j=Math.floor(Math.random()*100);
    if (j===0) {
        var chiva = "Heee... paso queee... Nop, no tengo nada.";
    }
    document.querySelector('#excusa').innerHTML = chiva;    
    }