// O(1) // constant of O
// No Matter how big a data is this type of functions will be efficient
function inTime(arr,index){
    return arr[index]
}
let arr = [1,2,3,4,5]
let result = Array.from({length:100000},(_,index)=>index+1)
console.time()
console.log(inTime(result,800))
console.timeEnd()

console.time()
console.log(inTime(arr,3))
console.timeEnd()

// O(n) Linear of O
// the bigger the input the greater the time will be taken

function totalSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
let totalArray=[1,2,3,4,5,6,7]
let totalArrayResult=Array.from({length:8000},(_,index)=>index+1)
console.time()
console.log(totalSum(totalArray))
console.timeEnd()

console.time()
console.log(totalSum(totalArrayResult))
console.timeEnd()

// O(N^N) quadric 
// it say the if the input is double for calculation then the amount will increase with same speed
function double_the_Sum(arr){
let sum1=0,sum2=0
for(let i=0; i<arr.length; i++ ){
    sum1 += arr[i]
    for(let j=0; j<arr.length; j++){
        sum2 += arr[j]
    }
}
return sum1 + sum2;
}
console.log("################################## double_the_sum#######################")
console.time()
console.log(double_the_Sum(totalArray))
console.timeEnd()

console.time()
console.log(double_the_Sum(totalArrayResult))
console.timeEnd()

/// Sliding window find the max number in an array for specific number
function find_sum_with(arr,k){
    let sum=0;
    let maxSum=0;
    for(let i=0; i<k; i++){
        maxSum += arr[i]
        
    }
    sum = maxSum;
    for(let i=k; i<arr.length; i++){
        sum = sum - arr[i-k]+arr[i]
        maxSum = Math.max(maxSum,sum)
    }
    return maxSum;
}
let arr1=[1,2,3,4,5,6]
console.log("#########################################")
console.log(find_sum_with(arr1,4))