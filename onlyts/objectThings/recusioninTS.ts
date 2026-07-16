function sumUpto(num:number):number{
    if(num === 1){
        console.log(`sumUpto(${num}) return 1`)
        return 1;
    };
    console.log(`sumUpto(${num}) call sumUpto(${num - 1}) + ${num}`)
let result = num + sumUpto(num-1);
console.log(`sumUpto(${num}) return ${result}`)
return result;
}
let result:number = 20;
console.log(sumUpto(result)
)
let arr=[1,2,3,4,5,6]
console.log(arr[2])