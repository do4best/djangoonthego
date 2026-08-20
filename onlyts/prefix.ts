function prefix(pre:string,word:string|string[]):string|string[]{
if(typeof word === "string"){
    return `${pre}${word}`;

    
}else{
        return word.map(w =>`${pre}${w}`);
}

}
console.log(prefix("Mr. ", ["Smith", "Jones"])); 