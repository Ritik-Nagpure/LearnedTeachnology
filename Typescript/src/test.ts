let counter: any = (function () {
    let k: number = 0;
    return () => k++;
});

console.log(counter());
console.log(counter());
console.log(counter());

