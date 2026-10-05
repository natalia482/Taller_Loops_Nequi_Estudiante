const prompt = require('prompt-sync')();

let opcion;

do{
    console.log(`====MENU DE NEQUI ====`);
    console.log(`1. Ver saldo`);
    console.log(`2. Enviar Dinero `);
    console.log(`3. Recargar `);
    console.log(`4. Salir`);
    opcion = Number(prompt(`Ingrese el número de la opción: `));
    if(opcion === 1){
        console.log(`==== SALDO ====`);
        console.log(`Su saldo de nequi es: `);
        console.log(`=================`);
        
    }else if(opcion === 2){
        console.log(`==== ENVIAR DINERO ====`);
        console.log(`A quien desea enviar dinero: `);
        console.log(`=================`);

    }else if(opcion === 3){
        console.log(`==== RECARGAR ====`);
        console.log(`Recargar: `);
        console.log(`=================`);
    }else if(opcion ===4){
        console.log(`==== SALIR ====`);
        console.log(`Graciar por usar nuestro servicio: `);
        console.log(`=================`);
    }else{
        console.log(`==== ERROR ====`);
        console.log(`Digito incorrecto intente de nuevo `);
        console.log(`=================`);
    }

} while(opcion !== 4);


//¿En qué se diferencia este do…while del while del ejercicio 2? Si la primera vez el usuario ya escribiera
//"Salir", ¿el menú alcanzaría a mostrarse al menos una vez? ¿Y con un while normal?
// En que esta primero ejecuta el menu y despues valida la opcion, si, el menu se mostraria primero si la opcion fuera salir 