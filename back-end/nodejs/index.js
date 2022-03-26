const moment=require('moment')

function sayMyName(name){
    console.log(name)
    // essa é uma biblioteca externa que utilizamos para formatar hora
    console.log(moment().format('HH:mm'))
}


sayMyName('joao')