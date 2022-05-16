const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let result=hitchedSpaceships.filter(element=>{
    return element[1]>9

}).map(element=>{
    return element[0]
})

let positionIndex=hitchedSpaceships.findIndex(element=>{
    return element[2]==false
})

let transforme=hitchedSpaceships.map(element=>{
    return element[0].toUpperCase()
})
let message="espacionave com mais de 9 tripulantes "+result.join(", ")
message+="\nPlataforma com processo de engate "+(positionIndex+1)
message+="\nEspaçonave descatada: "+result.join(", ")



// hitchedSpaceships.findIndex(element=>element>8)
console.log(message)