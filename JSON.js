function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key1 = keys1[i];
    const key2 = keys2[i];

    if (key1 !== key2 || obj1[key1] !== obj2[key2]) {
      return false;
    }
  }

  return true;
}

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

if (areObjectsEqual(obj1, obj2)) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}