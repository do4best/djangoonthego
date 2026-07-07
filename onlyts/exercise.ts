// let result = function printAll(person:string):string{
//     return `Hello Mr ${person}`
// }

// console.log(result("Friend"))
// type Calculator=number;   
// function calculator(num1:Calculator,num2:Calculator,operator:string):Calculator{
//     let result:number
//     switch(operator){
//         case '+':
//             result = num1 + num2;
//             break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//                 default:
//                     throw new Error("Here are some Error")

//     }
//     return result;
// }

// console.log(calculator(89,90,'/'))

type Letter = string

function letterRepeat(sentence:Letter,letter:Letter):number{
    let count = 0;
    for(let i=0; i<sentence.length; i++){
        if(sentence[i] === letter){
            count++;
        }
    }
    return count;
}
console.log(letterRepeat("Find the god and asked him help","d"))

function findMax(arr:number[]):number{
    return Math.max(...arr)
}
console.log(findMax([90,55,44,33,22,11]))

function findMax1(arr: number[]): number {
    let max1:any;
    
    max1 = arr.length > 0 ? arr[0] : Number.NEGATIVE_INFINITY;
  for (const v of arr) {
    if (v > max1) {
      max1 = v;
    }
  }
  return max1;
}
console.log(findMax1([90,55,44,33,22,11]))