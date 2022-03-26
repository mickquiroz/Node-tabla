const fs = require('fs');
const colors = require('colors');
const crearTabla = async(base = 5 , listar=true, hasta= 10) => {

    try {

        let salida = '';

        for (let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            
        }

        if( listar ){
            console.log('==========================='.yellow);
            console.log("        TABLA DEL: ".green, colors.red (base));
            console.log('==========================='.cyan);
            console.log(salida.rainbow);
        }
        

        fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt creado`.blue;
    } catch (err) {
        throw err;
    }
    


}

module.exports = {
    crearTabla
}






