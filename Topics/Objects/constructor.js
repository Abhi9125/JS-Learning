// ----------------------------------------
// 1. constructor in js --> jb bhi kisi function ko new keyword ki help se call karege to eek
// new object create hota hai aur us new object ko this point krta hai.
// -------------------------------------------

function car(brand, model, color) {
  this.Brand = brand;
  (this.Model = model), (this.Color = color);
}

//
let car1 = new car("BMW", "X5", "BLACK"); // when we call function with new keyword this --> {}
let car2 = new car("Land Rover", "Defender", "White");

console.log(car1.Brand);
console.log(car2.Brand);

// --------------------------------------
// 2. we can also update this object
// -------------------------------------

car1.Brand = "Mersdez";
console.log(car1.Brand);
