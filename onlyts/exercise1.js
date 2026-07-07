// function printAll(person){
//     return `Hello Mr. ${person}`
// }
// console.log(printAll("Afzal"))
// function calculator(num1,num2,operator){
//     let result;
//     switch(operator){
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;

//         case '*':
//             result = num1 * num2;
//             break
//         case '/':
//             result = num1 / num2;
//             break
//             default:
//                 throw new Error("There is an error")

//     }
//     return result;

// }

// console.log(calculator(90,89,'*'))

function letterRepeat(sentence,letter){
    let count=0;
    for(let i=0; i<sentence.length; i++){
        if(sentence[i]=== letter){
            count++;
        }
    }
    return count;

}
console.log(letterRepeat("my friend is on the fire",'e'))

function findMax(arr){
    return Math.max(...arr)
}
console.log(findMax([5,4,8,9,45,32,1]))