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
// set
//get by index
// size as refrence
// for of and forEach as iterator
// delete function as key
// get only keys()
// get only values()
// clear() all the functiongit 