// function fuindCharacter(str:string):string{
//     let letterIndex = str.length;
//     for(let i=0; i<str.length-1; i++){
//         let current = str.charCodeAt(i)
//         let next= str.charCodeAt(i+1)
//         if(next-current >1){
//             return String.fromCharCode(current+1)

//         }
//     }
//     return " No Missing Letter"

// }
function findCharacters(str: string): string {
  let missing: string[] = [];

  for (let i = 0; i < str.length - 1; i++) {
    let current = str.charCodeAt(i);
    let next = str.charCodeAt(i + 1);

    // If there's a gap, fill in all missing letters
    for (let code = current + 1; code < next; code++) {
      missing.push(String.fromCharCode(code));
    }
  }

  return missing.length > 0 ? missing.join(", ") : "No Missing Letter";
}

let result = findCharacters("abdgh");
console.log(result); // → "c, e, f"
