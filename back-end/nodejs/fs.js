const fs=require('fs')
// essa funcao cria um arquivo txt utiliza trez paramentros que são o arquivo , outro informação , uma funcção anonima
fs.writeFile('test.txt','ola nodejs',error=>{
    console.log(error)
})
// adiciona um novo texto
fs.appendFile('test.txt','outro conteudo',error=>{
    console.log(error)
})
// fs.rename('test.txt','estou renomeando',error=>{
//     console.log(error)
// })

// renomeia um arquivo
fs.rename('test.txt','test2.txt',error=>{
    console.log(error)
})

// exclui um arquivo

fs.unlink('test.txt',error=>{console.log(error)
})

fs.rename('test.txt','test2.txt',error=>{
    console.log(error)
})

// tem uma funcão verificar o diretorio onde estamos o __dirname