let array = [];

for (let i = 0; i < 100; i++) {
  array.push(i);
}

function insertAtEnd(array, value) {
  array.push(value);

  return { array, steps: 1 };
}

let endInsertionResult = insertAtEnd(array, 101);
console.log("Array setelah penyisipan di akhir:", endInsertionResult.array);
console.log("Jumlah langkah penyisipan:", endInsertionResult.steps);
