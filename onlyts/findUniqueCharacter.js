function findUnique(str){
    for(let i=0; i<str.length; i++){
let findUnique=true;
for(let j=0; j<str.length; j++){
    if(i !== j && str[i] === str[j]){
        findUnique = false;
        break;
    }

}
if(findUnique){
    return str[i];
}
    }
    return "No Unique Character"
}

let result = findUnique("find the code")
console.log(result)