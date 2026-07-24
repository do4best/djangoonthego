const myArray:number[] = [4,3,6,7,11,9]

if (myArray.length > 0) {
  let minValue:number = myArray[0]!;

  for (let i of myArray) {
    if (i < minValue) {
      minValue = i;
    }
  }

  console.log(`The minimum value is ${minValue}`);
} else {
  console.log("Array is empty");
}