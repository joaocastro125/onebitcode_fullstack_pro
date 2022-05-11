const slowDown=(velocity,printer)=>{
    let declaration=20
    while(velocity>0){
        printer(velocity)
        velocity-=declaration
    }
    console.log("Nave parada. As comportas podem ser abertas.")
}


let nave=150

slowDown(nave,function(velocity){
    console.log("velocity atual :"+velocity)
})
 
for(i=0;i<20; i++){

}

