let checkmap = new Map([
    [1,"Afzal"]
])

console.log(checkmap)
checkmap.set(2,"Meer")
console.log(checkmap.get(2))
console.log(checkmap.has(3))
console.log(checkmap.size)
for(let[key,value] of checkmap){
    console.log(key,value)
}