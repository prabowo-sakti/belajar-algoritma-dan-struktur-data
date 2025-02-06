// Membuat 100 elemen array

let array = [];
for (let i = 0; i < 100; i++) {
  array.push(i + 1);
}

function deleteAtBeginning(array) {
  array.shift(); //Menghapus elemen pertama
  let steps = array.length;
  return { array, steps };
}

let deletionResult = deleteAtBeginning(array);

console.log("Hasil array setelah penghapusan di awal:", deletionResult.array);
console.log(
  "Jumlah langkah penghapusan ke kiri adalah:",
  deletionResult.steps + "x"
);

// Big-O Complexity: O(N)
// Penjelasan: menghapus elemen pertama dari array memerlukan waktu O(N),
// Karena semua elemen setelahnya harus digeser ke kiri untuk mengisi ruang yang ditinggalkan oleh elemen pertama.

// Penjelasan Tambahan:
// Penghapusan elemen pertama memerlukan O(N) waktu karena array harus menggeser setiap elemen satu per satu ke kiri
