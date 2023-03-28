function fetchNextElement(array) {
    let idx = 0;

    function next() {
        if (idx == array.length) {
            return undefined;
        }
        let nextElement = array[idx];
        idx++;
        return nextElement
    }
    return {
        next
    };
}

const automaticFetcher = fetchNextElement([1, 2, 3, 4, 5, 6, 7]);

console.log(automaticFetcher);

console.log(automaticFetcher.next());
console.log(automaticFetcher.next())
console.log(automaticFetcher.next())
console.log(automaticFetcher.next())
console.log(automaticFetcher.next())