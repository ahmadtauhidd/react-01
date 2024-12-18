// let
let namae = "Rifai";
console.log(namae); // Output: Rifai

// const
const age = 17;
console.log(age); // Output: 17

// arrow function
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("Rifai"); // Output: Hello, Rifai!

// template literals
const boy = "Bowo";
const message = `Hey, ${boy}!`;
console.log(message); // Output: Hey, Bowo!

// destructuring array
const num = [10, 20, 30];
const [ten, twenty, thirty] = num;
console.log(ten, twenty, thirty); // Output: 10 20 30

// destructuring object
const person = { firstName: "Attar", lastName: "Rifai" };
const { firstName, lastName } = person;
console.log(firstName, lastName); // Output: Rifai 17

// spread operator array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// spread operator object
const names = { firstName: "Attar", lastname: "Rifai" };
const ages = { age: 17 };
const bio = { ...names, ...ages };
console.log(bio); // Output: {firstName: "Attar", lastname: "Rifai", age: 17}

// export and import
const { greeting } = require('./utils');
greeting("Rifai"); // Output: Hello, Rifai!

// promises
const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data berhasil diambil");
        }, 1000);
    });
};

getUserData().then(response => console.log(response)); // Output: User data berhasil diambil

// async/await
const fetchUserData = async () => {
    try {
        const response = await getUserData();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

fetchUserData(); // Output: User data berhasil diambil

// class
class Electronic {
    constructor(type) {
        this.type = type;
    }

    powerOn() {
        return `${this.type} dinyalakan.`;
    }
}

const smartphone = new Electronic("Smartphone");
console.log(smartphone.powerOn()); // Output: Smartphone dinyalakan.

// inheritance
class Laptop extends Electronic {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }

    boot() {
        return `${this.type} ${this.brand} sedang booting.`;
    }
}

const dell = new Laptop("Laptop", "Dell");
console.log(dell.powerOn()); // Output: Laptop dinyalakan.
console.log(dell.boot());    // Output: Laptop Dell sedang booting.
