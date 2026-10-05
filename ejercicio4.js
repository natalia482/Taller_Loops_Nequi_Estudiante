let movimientos =[10000,{tipo: "pagoComercio", monto:1000000},0,0,1000,22000,-20000,0,200000,-30000,-5000,10000,-2000,0,10000];
let total = 0;
let cantidadRetiros= 0;


for(let i=0; i< movimientos.length; i++){
    //parte A: filtrar
    if(movimientos[i] === 0 ){
        continue;
        cantidadRetiros+=1;
    }else if(movimientos[i].tipo === "pagoComercio"){
        console.log(`POSICIÓN:${movimientos.findIndex(movimientos => movimientos.tipo === "pagoComercio")}, ${movimientos[i].tipo}, ${movimientos[i].monto}`);
        break
    }
}
