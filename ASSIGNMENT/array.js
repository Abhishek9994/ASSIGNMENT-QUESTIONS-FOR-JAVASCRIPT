let myArray = [10, 20, 30, 40, 50];

myArray.push(60);
myArray.push(70);

let removedElement = myArray.splice(4, 2); 


let elementExists = myArray.includes(70);

console.log("Array:", myArray);
console.log("Removed Element:", removedElement);
console.log("Does 40 exist in the array?", elementExists);