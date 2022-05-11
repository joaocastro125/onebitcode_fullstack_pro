let nave=prompt("qual o nome do espaço da nave")
let caractere=prompt("qual caractere que deseja  subtituir")
let carac=prompt("qual caractere ele deseja subtituir")
let newCaractere=""

for(let pos=0;pos<nave.length;pos++){
    if(nave[pos]==caractere){
        newCaractere+=carac
    }else{
        newCaractere+=nave[pos]
    }
    alert("O novo nome da nave é " + newCaractere)
}
