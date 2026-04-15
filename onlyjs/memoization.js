let expect= function(val){
return{
    toBe:(value)=>{
if(value === val){
    return true
}else{
    throw "Not Equal"
}
    },
    notToBe:(value)=>{
        if(value !== val){
            return true
        }else{
            throw "Equal"
        }
    }
}
}

let counter = function(value){
    let count=value;
    return{increment:()=>(++count),
        decrement:()=>(--count),
        reset:()=>(value=0)
    }
}
console.log(counter(10).increment())
let map = function(arr,fn){
    let newArr=[];
    arr.forEach((value,index)=>{
        newArr.push(fn(value,index))
    })
    return newArr;

}
let add=(arr)=> arr*2
let result = map([1,2,3,4],add)
console.log(result)

function noMap(arr,fn){
    let arrA=[];
    arr.forEach((index,value)=>{
        arrA.push(fn(index,value))
    });
    return arrA;
}
let addOne = (arr=>arr+arr)

console.log(noMap([4,5,6,7,8,9],addOne))