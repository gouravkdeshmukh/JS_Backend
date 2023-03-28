function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromise() {
    return new Promise(function(resolve, reject) {
        console.log("Creating Promise.....");
        setTimeout(() => {
            console.log("In Set Time Out");
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
                console.log("Promise Resolved");
            } else {
                reject(num);
                console.log("Promise Rejected");
            }
            console.log("Out side set time out");
        }, 0)

    })
}
console.log("Starting code .......");
const p = createPromise();
console.log("Promise status after completion", p);
console.log("inside the handler 1");
p.then(function fulFilledHandler(value) {
        console.log("inside fulfillment handler with value ", value);
        console.log("Promise after fulfillment ", p);
        setTimeout(() => {
            console.log(" FH1 Timer ended");
        }, 5000);
    },
    function rejectedHandler(value) {
        console.log("inside rejection handler with value ", value);
        console.log("Promise after rejection ", p);
    });
console.log("inside the Hanlder 2");
p.then(function fulFilledHandler2(value) {
        console.log("inside fulfillment handler2 with value ", value);
        console.log("Promise after fulfillment2 ", p);
        setTimeout(() => {
            console.log(" FH2 Timer ended");
        }, 5000);
    },
    function rejectedHandler2(value) {
        console.log("inside rejection handler2 with value ", value);
        console.log("Promise after rejection2 ", p);
    });
console.log("ENd");

setTimeout(() => {
    console.log(" global Timer ended");
}, 10000);