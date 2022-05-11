const hitchedSpaceships=[
    ["fenix",8,true],
    ["golias",10,true],
    ["helmet",5,false],
    ["Element",3,true],
    ["darwin",15,false]
]

let result=hitchedSpaceships.filter(tripulantes=>{
    return tripulantes[1]>9

}).map(tripulantes=>{
    return tripulantes>[0]
})

let positionIndex=hitchedSpaceships.findIndex(element=>{
    return element[2]==false
})

let transforme=hitchedSpaceships.map(element=>{
    return element[0].toUpperCase()
})
let message="espacionave com mais de 9 tripulantes"+result.join(", ")
message+="\nPlataforma com processo de engate "+(positionIndex+1)
message+="\nEspaçonave descatada: "+result.join(", ")



// hitchedSpaceships.findIndex(element=>element>8)
console.log(message)