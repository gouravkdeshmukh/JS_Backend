function blockingForLoop() {
    for (let i = 0; i < 10000000; i++) {}
}

console.log("start");
blockingForLoop();

setTimeout(() => {
    console.log("Timer 1 done");
}, 0);

blockingForLoop();

let p = Promise.resolve("Gourav Promise 1");
p.then((value) => { console.log("Whose Promise?", value); });

let p1 = Promise.resolve("Gourav Promise 2");
p.then((value) => {
    console.log("Whose Promise?", value);
    setTimeout(() => {
        console.log("ok done");
    }, 1000);
});

let p3 = Promise.resolve("Gourav Promise 3");
p.then((value) => {
    console.log("Whose Promise?", value);
    blockingForLoop();
})
blockingForLoop();

setTimeout(() => {
    console.log("Timer 2 Done")
}, 1000);

console.log("end");