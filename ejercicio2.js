const prompt = require('prompt-sync')();

let pinCorrecto= 1234;
const numeroIntentos=0;

let intento = Number(prompt(`Escribe tu PIN: `));

while(intento !== pinCorrecto){
    console.log(`PIN INCORRECTO, INTENTE NUEVAMENTE`);
    intento = Number(prompt(`Escribe tu PIN: `));
}

console.log(`BIENVENID@ A LA APP DE NEQUI`);

//¿Qué pasa si olvidas volver a pedir el intento dentro del bucle? El PIN incorrecto nunca cambia… ¿el
//programa se detiene alguna vez? A eso se le llama un bucle infinito. ¿Cómo lo evitas siempre?
//Si olvido pedir el intento dentro del bucle entra en un bucle infito para evitarlo debo volver ausar
//prompt para que se vuelva a pedir

