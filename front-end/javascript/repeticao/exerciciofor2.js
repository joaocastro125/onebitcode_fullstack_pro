let nave=prompt("qual o nome da espaço nave")

let invert=""

for(ant=nave.length-1;i>=0;i--){
    if(nave=="e"){
        invert+=nave[ant]
        break
    }else{
        invert+=nave
    }
}