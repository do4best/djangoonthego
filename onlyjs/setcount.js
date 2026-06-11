function callme(){
   
}
function callit(num){
    if (num < 0) {
        return num;
    }
    console.log(num);
    return callit(num - 1);
}
function add(a,b){
    if((a && b)<0){
        return a + b;
    }
    console.log(a,b)
    return add(a-1,b-1)
}
function power(base,exponent){
    if(exponent === 0){
        return 1;
    }
    return base*power(base,exponent-1)
}
function sumArray(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1))
}
function rangeNumber(start,end){
    if(start === end){
        return [start]
    }
    const numbers = rangeNumber(start,end-1);
    numbers.push(end);
    return numbers;
}
arr=[1,2,3,4,5]
console.log(power(5,4))
console.log(sumArray(arr))
console.log(rangeNumber(1,8))