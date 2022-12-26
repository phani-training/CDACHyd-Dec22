console.log("Testing the code");

function addFunc(v1, v2) {
    return v1 + v2;
}

const subFunc = (v1, v2) => v1 - v2;
const mulFunc = (v1, v2) => v1 * v2;
const divFunc = (v1, v2) => v1 / v2;
const sqrtFunc = (v) => Math.sqrt(v);
const sqrFunc = (v) => mulFunc(v, v);

console.log(`The Added value: ${addFunc(123,23)}`);
console.log(`The Subtracted value: ${subFunc(123,23)}`);
console.log(`The Multiplied value: ${mulFunc(123,23)}`);
console.log(`The Divided value: ${divFunc(123,23)}`);
console.log(`The Square of a number: ${sqrFunc(12)}`);
console.log(`The Square Root of a Number: ${sqrtFunc(12)}`);
