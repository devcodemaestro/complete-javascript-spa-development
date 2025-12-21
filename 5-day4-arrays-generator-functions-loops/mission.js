function Product(name, price) {
  this.name = name;
  this.price = price;
}

const products = [
  new Product("모니터", 300000),
  new Product("키보드", 50000),
  new Product("노트북", 1200000),
];

let maxPrice = 0;
let maxName = "";
for (let i = 0; i < products.length; i++) {
  if (maxPrice < products[i].price) {
    maxName = products[i]["name"];
    maxPrice = products[i].price;
  }
}
console.log(maxName);

const fruits = ["사과", "바나나", "포도", "사과", "체리", "바나나", "망고"];

fruits.forEach((elm) => {
  console.log(elm);
});

console.log(fruits.includes("망고"));

let idx = fruits.findIndex((elm) => elm === "포도");
console.log(idx);

let filterFruits = fruits.filter((e) => e === "사과");
console.log(filterFruits);

let newArr = fruits.slice(0, 3);
console.log(newArr);
