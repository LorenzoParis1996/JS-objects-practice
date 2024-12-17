//template literal
const car = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel"
};

console.log(car);

//constructor function
function Car (brand, model, fuel) {
    this.brand = brand;
    this.model = model;
    this.fuel = fuel;
};

const newCar = new Car ("Fiat", "Punto", "gas");

console.log(`Here's my new car, a ${newCar.brand} ${newCar.model}, powered by ${newCar.fuel}`);

//method Object.create()
const transport = {
    brand: "Fiat",
    model: "Panda",
    fuel: "hybrid"
};

const fiat = Object.create(transport);

console.log(fiat);

