const fs = require('fs'); 
const colors = require('colors');


const crearArchivo =  async(base=5, listar = false, hasta=10) =>{

    try{
        
        let salida = ''; 
        let consola = '';
    
        for (let i = 1; i <= hasta; i++){
            salida  += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.white} ${i} ${`=`.white} ${base * i}\n`;
        }
    
        if(listar){
            console.clear();
            console.log('==================='.red);
            console.log(colors.cyan('  Tabla del:'), base);
            console.log('==================='.red);

            console.log(colors.green(consola));
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    }catch(err){
        throw err
    }
}
    

module.exports = {
    crearArchivo
}