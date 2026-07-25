type Car={
    model:string,
    make:number,
    year:number


}
const MyCar:Car={
    year:1989,
    make:589,
    model:"Tyota"
}
console.log(MyCar.model)
interface Area{
    width:number,
    height:number
}
const MyArea:Area={
    height:56,
    width:78
}
function factorial(num:number):number{
    if(num === 1) return 1;
    return num + factorial(num-1)
}
function sumup(num:number):number{
    let sum=0;
    for(let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}
console.log(sumup(40))
console.log(factorial(40))
/////// bubble sort
const bubbleSort = (arr: number[]): number[] => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j]! > arr[j + 1]!) {
                [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]];
            }
        }
    }
    return arr;
}

const array:number[] = [9, 10, 3, 2, 1, 0, 5, 4, 6, 7, 8];
console.log(bubbleSort(array));


