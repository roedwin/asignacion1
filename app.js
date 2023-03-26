const fs = require('fs')


let nombreArchivo = `respuesta-${Math.floor(Math.random() * 10)+1}.txt`



const naveEspacial = (numeroNecesesario) => {    

    let count = 1  
    if (numeroNecesesario > 10000) {      
        
        fs.appendFileSync(nombreArchivo, "VIAJE DESDE EL PLANETA NAMEK HACIA LA TIERRA", (err)=>{
            if(err) throw err
        }) 

        while(numeroNecesesario !== 1){
            if(esPar(numeroNecesesario)){
                numeroNecesesario = numeroNecesesario / 2
                agregarNumero(`\nViaje numero ${count} planeta ${numeroNecesesario}`)
                count++           
            }else{
                numeroNecesesario = (numeroNecesesario*3)+1
                agregarNumero(`\nViaje numero ${count} planeta ${numeroNecesesario}`)
                count++  
            }
        }
        agregarNumero(`
        El planeta ${numeroNecesesario} es el planeta tierra:
        Has llegado a tu destino
        `);
    }else{
        console.log("Cantidad insuficiente");
    }
}

const esPar = (numero) => {
    return numero % 2 === 0
}

const agregarNumero = (numero) => {
    try {
        fs.appendFileSync(nombreArchivo, numero)
    } catch (err) {
    console.error(err)
    }
}


naveEspacial(Math.floor(Math.random() * (50000 - 10000 + 1) + 10000))
