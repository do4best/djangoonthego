// for (let i = 1; i <= 10; i++) {
//   let row = " ";
//   for (let num = 1; num <= 10; num++) {
//     row += `${num} x ${i} = ${num * i}\t\n`;
//   }
//   console.log(row + " ");
//   console.log("\n")
// }
function splitSentence(word){
  let map = new Map();
  for(let words of word){
    [name,phoneNumber] = words.split(":")
    map.set(name,phoneNumber)
  }
  return map;
}
let personContact=['Meer:03204522701']
console.log(splitSentence(personContact))