const car = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel"
};

//it checks if it has a property of its own, not inherited. If the property its present, it will return a boolean value (in this case, true). Else, it will be false
const model = car.hasOwnProperty('model');

console.log(model);
