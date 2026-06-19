function checkObj(obj) {
    return (typeof obj === 'object' && obj !== null)
}
function objProps(obj) {
    for (let ele in obj) {
        if (checkObj(obj[ele])) {
            objProps(obj[ele])
        } else {
            console.log(ele,obj[ele])
        }
    }
}
function suffleArray(arr) {
    let newArray = [...arr];
    let newPos="";
   let i=objProps(newArray);
   {
        newPos = Math.floor(Math.random() * newArray.length);
        [newArray[i], newArray[newPos]] = [newArray[newPos], newArray[i]];
    }
    return newArray;
}
let shuffleIt = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < 20; i++) {
    console.log(i + " = " + suffleArray(shuffleIt));
}