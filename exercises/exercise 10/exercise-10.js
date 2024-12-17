const car = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel"
};

//object converted into json string, to store data in certain formats or to be sent to a server
const carJson = JSON.stringify(car);

console.log(carJson);

//json string converted into javascript object, when receiving data from a server
const carJS = JSON.parse(carJson);

console.log(carJS);