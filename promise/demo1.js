console.log("start");

setTimeout(() => {
    console.log("Timer 1 done");
}, 0);

let p = Promise.resolve("Gourav's Promise");
p.then(function fulfillhandler(value) {
    console.log("Whose Promise?", value);
})

setTimeout(() => {
    console.log("Timer 2 done");
}, 0);


for (let i = 0; i < 100000; i++) {};

console.log("End");