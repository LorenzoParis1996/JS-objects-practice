const carOne = {
    brand: "Fiat",
    model: "500",
    fuel: "diesel",
    color: "white"
};

const carTwo = {
    brand: "Fiat",
    model: "Punto",
    fuel: "hybrid",
    color: "blue"
};

const carThree = {
    brand: "Fiat",
    model: "Panda",
    fuel: "gas",
    color: "green"
};

//for merging objects with same name properties
const mergedCars = [carOne, carTwo, carThree];

console.log(mergedCars);

const bicycle = {
    color: "red"
}

const motorbike = {
    engine: 1
}

const tricycle = {
    wheels: 3
}

//with Object.assign, it will copy properties from motorbike and tricycle into bicycle, given it's the target object (target, source 1, source 2). Therefore, bicycle it's modified to include properties from the other two objects
const mergedCicles = Object.assign(bicycle, motorbike, tricycle);

//with the spread operator "(...variableName)", we create a new object by copying properties from the merged objects into a new object. In this case, the original objects remain unchanged, unlike Object.assign 
const mergedCiclesTwo = {...bicycle, ...motorbike, ...tricycle};

console.log(mergedCicles);
console.log(mergedCiclesTwo);

