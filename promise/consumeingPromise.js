console.log("start code");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromise() {
    return new Promise(function(resolve, reject) {
        console.log("Promise Crreated");
        setTimeout(() => {
            console.log("In set time out");
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
                console.log("Promise Resolved");
            } else {
                reject(num);
                console.log("Promise Rejected");
            }

            console.log("Out of set time out");

        }, 3000)
    })
}
console.log("Promise starting.....");
const p = createPromise();
console.log("Waiting for Promise to complete...");
console.log("Promise Status : ", p);
p
    .then(
        function fulFilledHandler(value) {
            console.log("Inside the FulFillMentHandler with value", value);
            console.log("Promise after FulFillment is", p);
        },
        function rejectionsHandler(value) {
            console.log("Inside rejection Handler with value", value);
            console.log("Promise after rejection Handler is", p);
        })