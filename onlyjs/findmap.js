function wordFrequency(arr){
    let str=arr.toLowerCase().split(/\W/);
    let map = new Map();
    for(let word of str){
        if(word === "") continue;
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }else{
            map.set(word,1)
        }
    }
    return map;
}
function phoneDirectory(arr){
    let phone = new Map();
    for(let i of arr){
        const [name,number] = i.split(":")
        phone.set(name,number)
    }
    return phone;
}
let str = "how are you my son and my beloved one";
let findName=['Meer:03204522701']
console.log(wordFrequency(str))
console.log(phoneDirectory(findName))
function anarGame(arr){
    let map = new Map()
    for(words of arr){
        let sortedChar = words.split('').sort().join('')
        if(map.has(sortedChar)){
            map.get(sortedChar).push(words)
        }else{
            map.set(sortedChar,[words])
        }
    }
    return Array.from(map.values())
}

let defArray=['dog','god','rich','cat','tac']

console.log(anarGame(defArray))