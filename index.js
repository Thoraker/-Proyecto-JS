var arr1 = ['Un perro ', 'Mi Abuelita ', 'Una tortuga ', 'Mi cacatúa ', 'Mi vecino '];
var arr2 = ['se comió ', 'meó ', 'me rompió ', 'se robó ', 'se llevo '];
var arr3 = ['mi calcetín ', 'mi móvil ', 'mi billetera ', 'mis llaves ', 'mi trabajo '];
var arr4 = ['al salir de casa.', 'hace poco.', 'cuando no lo miraba.', 'en la hora de mi almuerzo.', 'cuando estaba rezando.'];
window.onload = () => {
    var chiva= " ";
    for (let i=0; i <=3; i++) {
        let rand = Math.floor(Math.random()*4);
        if (i==0) var chiva = arr1[rand];
        else if (i==1) var chiva = chiva+ arr2[rand]; 
        else if (i==2) var chiva = chiva+ arr3[rand];
        else if (i==3) var chiva = chiva+ arr4[rand];
    }
    let j=Math.floor(Math.random()*10);
    if (j=0) chiva = "Heee... paso queee... Nop, no tengo nada.";
    document.querySelector('#excusa').innerHTML = chiva;    
    }