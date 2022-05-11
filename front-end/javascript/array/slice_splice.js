let carros = ["palio ", "fusca", "gol", "uno"]
// o splice   dois paramentros e primeiro é otimido e segundo exclui e adiciona
let removeCar = carros.splice(1, 2, "onix")

// o slice o tem dois paramentros e primeiro é otimido e segundo ele é a quantidade que vai ser excluida utiliza o negativo que exclui da direta para esquerda 


console.log(carros)
console.log(removeCar)