let Name=prompt("qual o nome do piloto?")

let velocityInitial=0


let pilot=prompt("qual velocidade que quer acelerar a maquina ")
let confirmPilot=confirm(`confirme sua velocidade ${pilot}km/h`)


if(confirmPilot){
    velocityInitial=pilot
}



if(velocityInitial<=0){
    alert("nave está parada ")
}else if(velocityInitial<40){
    alert("você está devagar,podemos aumentar mais ")
}else if(velocityInitial<80 ){
    alert("parece uma boa velocidade para manter ")
}else if(velocityInitial<100){
    alert("velocidade alta . Considere diminuir")
}else {
    alert("velocidade perigosa")
}

alert(`o nome do piloto ${pilot} e velocidade atual ${velocityEnd}`)
