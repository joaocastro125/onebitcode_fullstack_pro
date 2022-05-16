let spaceship={
    velocity:0,
    speedUp:function(acelerar){
        this.velocity+=acelerar
    }
}

function registre(){
    spaceship.name=prompt('informe o nome da nave:')
    spaceship.velocidaMaxima=prompt("sua velocidade maxima é :")
    spaceship.type=Number(prompt("informe o tipo da nave"))

}





function aceleration(){
    let acelerar=Number(prompt("quanto você quer acelerar ? km/s"))
    spaceship.speedUp(acelerar)
    if(spaceship.velocity>spaceship.speedUp){
        alert(
            "Velocidade maximaUltrapassada !"+
            "\nvelocidade atual da nave"+"km/s"+ spaceship.velocity +
           "\nvelocidae maxima da nava" +"km/s"+spaceship.speedUp
        )
    }

}

function stop(){
    alert("nome "+spaceship.name + "tipo"+ spaceship.type +"velocidade maxima :"
    + spaceship.velocidaMaxima)
    spaceship.velocity=0
}

function showMenu(){
    let option
    do{
        option=prompt("deseja:\n1 - aclerar\n2 - para* ")
        switch(option){
            case "1":
                acelerar()
                break
                case"2":
                stop()
                default:
                    alert("opção invalida ")
               
        }
    }while(option="2")
}

registre()
showMenu()