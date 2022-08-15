number = 10;
 
function add5() {
    return (number += 5);
}

function divideBy3() {
    return (number /= 3);
}

console.log(divideBy3());

console.log(add5());

console.log(parseInt("2", 10));

console.log(parseInt("2.2222", 10));

console.log(parseFloat("80.123999"));

//Lab tests
function makeInt(string) {
    console.log(parseInt(string));
}

makeInt("2000", 10);

function preserveDecimal(string) {
    console.log(parseFloat(string));
}

preserveDecimal("22.50")