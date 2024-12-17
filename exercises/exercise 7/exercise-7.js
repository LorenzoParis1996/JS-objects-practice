const car = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel"
};

//with delete, we can remove a property from the object, returning a boolean value (in this case, true) if the removal of the property is successful
const noFuelType = delete car.fuel;

console.log(noFuelType);

console.log(car);
