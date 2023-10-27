/*let ecole = [
    "Richardson",
    "Webster",
    "Alexis",
    "Berlin",
    "Bouquet"
]

console.log(ecole[3]);
console.log(ecole.length);
//console.log(ecole[ecole.length - 1]);
let newArray = ecole.shift(); //let newArray = ecole.pop();
console.log(newArray);

let addName = ecole.push("Jean")
let sliceArray = ecole.slice(0, 3)
console.log( sliceArray);

console.log(ecole.indexOf("Alexis"))// la position de Alexis dans l'array

function includeee(){
    if(ecole.includes("Webster")){
    console.log("He is a teacher");
}else{
    console.log("We do not find Webster");
}
}

includeee();

ecole.push("Berlin")

let otherName = ecole.find((element) => element === "Berlin")// Pour trouver un element dans un array

console.log(ecole);
//console.log(otherName);

let otherNameFilter = ecole.filter((element) => element === "Berlin")
console.log(otherNameFilter);*/


let pays = new Set([
    "Haiti",
    "congo",
    "USA",
    "Italie",
    "Italie"
])
pays.add("Alemagne");
console.log(pays.size)

//console.log(pays)

pays.forEach((element) => {
    console.log(element)
})

//console.log(pays.has("Alemagne"))

console.log(pays.delete("Alemagne"))
console.log(pays)
