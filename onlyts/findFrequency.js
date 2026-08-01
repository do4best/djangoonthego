function findFrequency(arr){
    for(let i=0; i<arr.length; i++){
        let count=1;
        let alreadyCounted=false;
        for(let k=0; k<i; k++){
            if(arr[k] === arr[i]){
                alreadyCounted = true;
                break;
            }
        }
        if(alreadyCounted){
            continue;
        }
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
          console.log(arr[i] + " -> " +count)
    }
  
}
function findFrequency(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let key in freq) {
        console.log(key + " -> " + freq[key]);
    }
}



findFrequency([1,1,2,3,4,4,5,6,7,7])