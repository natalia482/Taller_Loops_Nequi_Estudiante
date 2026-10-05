let movimientos =[10000,200000,-30000,-5000,10000,-2000];
let total = 0;
let cantidadRetiros= 0;


for(let i=0; i< movimientos.length; i++){
    console.log(`Movimiento ${i}, ${movimientos[i]} `);
    total++;
    if(movimientos[i] < 0 ){
        cantidadRetiros+=1;
    }
}

console.log(`El total de movimientos fueron ${total} y la cantidad de retiros ${cantidadRetiros}`);

//¿Qué pasa si pones el console.log del total dentro del bucle en vez de afuera? ¿Cuántas veces se
//imprime? ¿Cuál es el valor "bueno", el último o los del camino?
//Se impre la cantidad de veces que el for da la vuelta hasta completar la lista y el valor bueno es el ultimo.