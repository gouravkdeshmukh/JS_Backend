function dummyDwonloader(url, callback) {
    console.log("starting downloading from", url);
    setTimeout(function download() {
        console.log("done downloading from", url);
        content = "ABCDEFGHIJKLMNO";
        // callback(content);
        // callback(content);
    }, 1000);
}

console.log("Sarting downloader");
dummyDwonloader("www.xyz.com", function status(content) {
    console.log("Dwonloading Data is", content);
})