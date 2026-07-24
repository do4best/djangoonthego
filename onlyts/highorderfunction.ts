function sumofEvenSquare(numbers:number[]):number{
const evenSquare= numbers.filter((num:number)=>num%2 === 0).map((num:number)=>num ** 2).reduce((sum,square)=>sum+square,0)
return evenSquare
}

let result = sumofEvenSquare([1,2,3,4,5,6,7,8])
console.log(result)