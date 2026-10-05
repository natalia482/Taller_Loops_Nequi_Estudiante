const Usuarios = [
    {
        nombre: "Natalia",
        movimientos:[10000,200000,-30000,-5000,10000,-2000] 
    },
    {
        nombre: "Jose",
        movimientos:[200000, -50000, -30000, -15000, { tipo: "pagoComercio", monto: -45000}]
    },
    {
        nombre: "Mirian",
        movimientos:[50000, -10000, 0, -2000]
    }
]


for(let i=0; i < Usuarios.length; i++){
    let totalUsuarios =0;
    for(let j= 0; j< Usuarios[i].movimientos.length; j++){
        if(Usuarios[i].movimientos[j] < 0){
            totalUsuarios += Math.abs(Usuarios[i].movimientos[j])
        }else if(typeof Usuarios[i].movimientos[j] === "object" && Usuarios[i].movimientos[j] !== null &&  Usuarios[i].movimientos[j].monto < 0){
            totalUsuarios += Math.abs(Usuarios[i].movimientos[j].monto)
        }
    }

    console.log(`Nombre del usuario ${Usuarios[i].nombre} Total gastado: $${totalUsuarios}`);
    
}
