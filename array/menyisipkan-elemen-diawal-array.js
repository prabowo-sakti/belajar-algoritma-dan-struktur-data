// const fruits = ["Mangga", "Durian", "Rambutan", "Sirsak"];
// const newFruits = "Jeruk";

// const result = [...fruits, newFruits];
// console.log(result);

let arr = Array.from({ length: 100 }, (_, i) => i + 1);
const arr1 = arr.unshift(-1);
console.log(arr);
