function binarySearchObjects(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid].id === key) return arr[mid]; // return object
    else if (arr[mid].id < key) start = mid + 1;
    else end = mid - 1;
  }
  return null;
}

let users = [
  { id: 1, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 5, name: "Charlie" },
  { id: 7, name: "David" }
];

console.log(binarySearchObjects(users, 5)); 
// Output: { id: 5, name: "Charlie" }
function binarySearchStrings(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let comparison = arr[mid].localeCompare(key);

    if (comparison === 0) return mid;
    else if (comparison < 0) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(binarySearchStrings(names, "David")); // Output: 3
