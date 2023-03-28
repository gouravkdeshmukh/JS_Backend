function getRandonInt(max) {
    return Math.floor(Math.random() * max);
}
console.log('start ');
// for (let i = 0; i < 1000000; i++) {}

function creatPromise() {
    return new Promise(function(resolve, reject) {
        console.log('creating promise');
        var num = getRandonInt(10);
        if (num % 2 == 0) {
            resolve(num);
            console.log("Promise resolved");
        } else {
            reject(num);
            console.log("Promise rejected");
        }
    })
}
const x = creatPromise();
console.log(x);

console.log("end");