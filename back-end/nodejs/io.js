// uma biblioteca interna do javascript que vemos entra e saida de dados


const { exit } = require('process')
const process=require('process')
// A process.argv propriedade retorna uma matriz contendo os argumentos de linha de comando passados ​​quando o processo Node.js
console.log(process.argv)
// esse função do node faz com que apareça no terminal alguma in formação ou veja saida 
// process.stdout.write('qual o seu nome?')

// essa função faz com que o usuario posso digitar no teclado informações e data uma funcão interna do stdin
process.stdin.on('data',(keybord)=>{
    process.stdout.write(`qual o seu nome: ${keybord} `)
    exit()

})