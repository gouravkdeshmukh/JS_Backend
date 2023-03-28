function dummyDwonloader(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("strated downloadong data from ", url)
        setTimeout(() => {
            console.log("Data downloaded successfully");
            content = "ABCDEFGHIJKLMNO";
            resolve(content);
        }, 1000);
    })
}

console.log("starting downloader");
const p = dummyDwonloader("www.xyz.com");

p.then(
    function fulFilledHandler(data) {
        console.log("Downloaded Data is", data);
    })

console.log("Completed downloading");