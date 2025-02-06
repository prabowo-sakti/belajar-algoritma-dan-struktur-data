const array = Array.from({ length: 100 }, (_, i) => i + 1);

const target = 101;

let found = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === target) {
    //Pada validasi sederhana ini, jika array[i] atau nilai dari array yaitu 100
    //Maka hasilnya akan true, karena targetnya adalah 100, jadi array[99] atau 100 === target(100)
    //output: true
    found = true;
    break;
  }
}

console.log(found); //Dan kompleksitas dari big o adalah o(n), karena n merupakan panjang element.
