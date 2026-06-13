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

// Bubble sort repeatedly steps through the array,
// compares adjacent elements, and swaps them if they
// are in the wrong order. Each pass moves the largest
// unsorted value to the end, so the remaining range
// to inspect gets smaller on each iteration.
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
}
arr=[7,1,3,9,0,2]
console.log(power(5,4))
console.log(sumArray(arr))
console.log(rangeNumber(1,8))
console.log(bubbleSort(arr))