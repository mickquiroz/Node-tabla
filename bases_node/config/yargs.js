

const argv = require('yargs')

                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'toma la base a multiplicar'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'número hasta donde quieres la tabla'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muestra la tabla de multiplicar'
                })
                .check( (argv, options)=>{
                    if( isNaN( argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true
                })
                .argv;

module.exports = argv;