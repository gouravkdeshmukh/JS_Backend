function fun() {
    let i = 0;

    function gun() {
        i += 1;
        return i;
    }
    return gun;
}

let res = fun();
console.log(res);


console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());