const car = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel",
    startEngine: function() {
        return `Engine on`;
    },
    stopEngine: function () {
        return `Engine off`;
    },
    details: function () {
        return `This ${this.brand} ${this.model} weights 900kg, and comes in black or white colors`;
    }
};

console.log(car.details());
console.log(car.startEngine())
console.log(car.stopEngine())

