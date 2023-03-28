// let array = [1, 2, 3, 4, 5, 6, 7];

// iterator = array[Symbol.iterator]();

// iterator.next();


const it = makeRangeIterator(1, 10, 2, 4, 5, 6, 6, 7, 8);

let result = it.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);