function wordFrequency(str){
    let wordRepete = str.toLowerCase().split(/\W/);
    let wordFrequency1 = new Map();
    for(word of wordRepete){
        if(word === '') continue;
        if(wordFrequency1.has(word)){
            wordFrequency1.set(word,wordFrequency1.get(word)+1)
        }else{
            wordFrequency1.set(word,1)
        }
    }
    return wordFrequency1;
}

let arrStr = "How are you my friend and how the things goes on!"
console.log(wordFrequency(arrStr))