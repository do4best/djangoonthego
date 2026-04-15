function findDifference(arr1,arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    const result=[];
    for(const num of arr1){
        if(set2.has(num)){
            result.push(num)
        }
    }
    for(const num of arr2){
        if(set1.has(num)){
            result.push(num)
        }
    }
    return result;
}

console.log(findDifference([1,2,3,4,5,6],[5,6,7,8,9]))