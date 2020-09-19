// Iteration 1: Names and Input
let driverName=`Caro`;
console.log(`The driver's name is ${driverName}`)

let navigatorName=`Peter Parker`;
console.log(`The navigator's name is ${navigatorName}`)


// Iteration 2: Conditionals

if (driverName >= navigatorName){
    console.log(`The driver has longest name,
     it has ${driverName.length}`);
}
    else if (driverName <= navigatorName){
    console.log (`
    It seems that the navigator 
    has the longest name
    it has ${navigatorName.length} characters.`);
    }
    else if (driverName === navigatorName){
    console.log(`
    Wow, you both have equally long names, ${driverName.length}
    `);
}

// Iteration 3: Loops

console.log(driverName.toUpperCase());
console.log(driverName.reverse);

function reverse(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 
    return joinArray; 
}
 
reverse(driverName);

let frases=[
    `The driver's name goes first`,
    `Yo, the navigator goes first definitely`,
    `What?! You both have the same name?`,
]
frases.sort();

