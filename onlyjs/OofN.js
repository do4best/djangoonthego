function accessArray(arr,value){
    return arr[value]
}
let arr=[1,2,3,4,5]
console.time();
console.log(accessArray(arr,4))
console.timeEnd()

const result = Array.from({length:2500000},(_,index)=>index+1)

console.time();
console.log(accessArray(result,4000))
console.timeEnd()

// O of n O(n)

function totalValue(arr){
    let sum=0;
    for(let i of arr){
        sum += i;
    }
    return sum;
}
let totalPerson=[1,2,3,4,5,6]
let sumTotal = Array.from({length:500000000},(_,index)=>index+1)
console.time();
console.log(totalValue(totalPerson))
console.timeEnd()

console.time();
console.log(totalValue(sumTotal))
console.timeEnd()