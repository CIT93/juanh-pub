console.log("hello from inside main.js file");

//let myVar;

const myVar = 42;
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);

if (myVarType ==="string") {
    console.log(`will 11 run`)
} else {
    console.log(`will 13 run`)
}

function runNow() {
    if (myVarType ==="string") {
    console.log(`will 11 run`)
} else {
    console.log(`will 13 run`)
}
}

runNow();
runNow();