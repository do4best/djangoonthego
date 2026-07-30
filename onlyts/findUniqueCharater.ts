function firstUniqueCharacter(str:string):string[]{
    let uniques:string[] = []
    for(let i=0; i<str.length; i++){
        let isUnique:boolean=true;
        for(let j=0; j<str.length; j++){
            if( i !== j && str[i] === str[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            uniques.push(str[i]!);
        }

    }
    return uniques.length > 0 ? uniques : ["No Unique"];
}
let result = firstUniqueCharacter("find the code")
console.log(result)