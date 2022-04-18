let digiteDataEntrada=prompt("digite a data de partida(formate DD/MM/YYYY")
let digite=moment(digiteDataEntrada,"DD/MM/YYYY")

let Today=moment()

let DateDiff=Today- digite

let opcaoDate=prompt("escolha o que quer exibir partida\n1- segundo\n2- minutos\n3- horas\n4 - dias")

if(opcaoDate==1){
    let segunds=Math.round(DateDiff/1000)
    alert("tempo de vôo:"+segunds+"segundos")
}
else if(opcaoDate==2){
    let minutes=Math.round(DateDiff/1000/60)
    alert("tempo de vôo:"+minutes+"minutos")
}
else if(opcaoDate==3){
    let hours=Math.round(DateDiff/1000/3600)
    alert("tempo de vôo:"+hours+"horas")
}
else if(opcaoDate==4){
    let days=Math.round(DateDiff/1000/3600/24)
    alert("tempo de vôo:"+days+"dias")
}else{
    alert("opção invalida!!")
}