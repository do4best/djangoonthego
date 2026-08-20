function makeReduce(num:number[]):number{
    let aNumber:number=0;
    let add =(first:number,second:number)=>first+second;
    return num.reduce(add,aNumber);

}
function makeReduce1(num: number[], reducer: (a: number, b: number) => number, initial: number): number {
    return num.reduce(reducer, initial);
}

let result1 = [1, 2, 3, 4, 5];
console.log(makeReduce1(result1, (a, b) => a + b, 0));   // sum = 15
console.log(makeReduce1(result1, (a, b) => a * b, 1));   // product = 120
console.log(makeReduce1(result1, (a, b) => Math.min(a, b), Infinity)); // min = 1

let result = [1,2,3,4,5]
console.log(makeReduce(result))