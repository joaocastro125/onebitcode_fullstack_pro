// o high order function é uma função que retorna outra função e consequimos passar paramentros para ela 

function doubleVelocity(velocity,printer){
    console.log("entrei doubleVelocity")
    let newVelocity=velocity*2
    // funcao como parametro
    printer(newVelocity)
    return newVelocity
}

let printVelocity=velocity=>{
    console.log("nova velocidade: "+velocity+ " km/s")
}

let newVelocity=doubleVelocity(60,printVelocity)

console.log(newVelocity)