const car = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel"
};

//simple value update
Object.defineProperty(car, "fuel", {value: "gas"});

console.log(car);