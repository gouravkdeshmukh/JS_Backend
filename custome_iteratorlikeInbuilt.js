function fetchNextElement(array) {
    let idx = 0;

    function next() {
        if (idx == array.length) {
            return { value: undefined, done: true };
        }
        let nextElement = array[idx];
        idx++;
        return { value: nextElement, done: false };
    }
    return { next };
}

const automaticNextElement = fetchNextElement([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(automaticNextElement);
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());
console.log(automaticNextElement.next());