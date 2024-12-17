const car = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel"
};

//iterating only properties
for (const data in car) {
    console.log(data);
}

//iterating properties and accessing values
for (let key in car) {
    console.log(car[key]);
}
