let carro={
     fusca:"modelo antigo",
     modelo:"fiat",
     ano:1940,
     material:{
      tipo:"forte"
     }

}
// adcionando um novo elemento 

let novoObjeto=new Object() 
novoObjeto["ONIX"]=100
console.log(carro.material.tipo)
console.log(carro["modelo"])

console.log(novoObjeto)
   