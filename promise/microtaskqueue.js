function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("resolving promise");
        resolve("Done");
    });
}

setTimeout(() => {
    console.log("Timer 0s done");
}, 0);

const p = createPromise();
p.then(function fulFilledHandler1(value) {
    console.log("fulFilledHandler1 with value", value);
}, function rejectionHandler() {});
p.then(function fulFilledHandler2(value) {
    console.log("fulFilledHandler2 with value", value);
}, function rejectionHandler() {});
p.then(function fulFilledHandler3(value) {
    console.log("fulFilledHandler3 with value", value);
}, function rejectionHandler() {});

for (let i = 0; i < 1000000; i++) {}

console.log("ending")