let Name="joao"
let velocity=20


// console.log(Name.length==4 && velocity==20)
// v v =v
// console.log(velocity>19 && velocity<20)
// v f =f
// console.log(velocity<17 && Name=="joao")
// f v =f
// console.log(Name=="emanoel" && velocity>21)
// f f =f


//  comparação com o ou ||

// console.log(Name.length==4 || velocity==20)
// v v =v
// console.log(velocity>19 || velocity<20)
// v f =v
// console.log(velocity<17 || Name=="joao")
// f v =v
// console.log(Name=="EMANOEL" || velocity>21)
// f f =f

// console.log(!(velocity>19))
// não v=f
// console.log(!(Name=="emanoel"))
// não f=v 
console.log(!(velocity>25 && Name=="emanoel")||(velocity-3==17&&Name.length+1>15))