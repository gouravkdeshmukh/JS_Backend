console.log("Start code");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log("Loop Started");
// for (let i = 0; i < 10000000000; i++) {}
console.log("loop ended");

function generatePromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("In settimeout()");
            var num = getRandomInt(10);
            console.log("Promise created");
            if (num % 2 == 0) {
                // resolve(num)
                return num;
                console.log("Promise fullfilled");
                console.log("status", p);
            } else {
                // reject(num);
                return num;
                console.log("Promise rejected");
                console.log("status", p);
            }
            console.log("Out of Settimeout");
        }, 3000);


    })
}
const p = generatePromise();
console.log("status ", p);
console.log("end");