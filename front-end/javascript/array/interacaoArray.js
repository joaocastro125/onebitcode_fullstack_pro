let carros = ["palio ", "fusca", "gol", "uno"]

// o forEach ele faz um interção e percorre todo o array 

carros.forEach((carros, index) => {
    console.log("carros : " + carros + "index :" + index)
})

// o interação do map ele faz com que percorremos o array sem alterar o orinal ou veja ele faz um laço dentro dele 
// sem alterar a original ele faz uma transformação

let transforme = carros.map((carro) => {

    let transformarMaiusculo = carro.toUpperCase()
    return transformarMaiusculo
})

console.log(transforme)

// O filter()método cria um novo array preenchido com elementos que passam em um teste fornecido por uma função.

// O filter()método não executa a função para elementos vazios.

// O filter()método não altera a matriz original.



const ages = [32, 33, 16, 40];


ages.filter(age => {
    if(age>=18){
        console.log("maior de idade")
    }else{
        console.log("menor de idade")
    }
  
})



// verifica o primeiro elemento do array 
const arra1=[5, 12, 8, 130, 44]

const found=arra1.find(element=>element>10)

console.log(found)



