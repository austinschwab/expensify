// Object destructuring 
/*
const person = {
    name: 'Austin',
    age: 200,
    location: {
        city: 'Carlsbad', 
        temp: 70
    }
};


const { name: firstName = 'Billi Bob', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}`);

const add = ({ a, b }, c) => {
    return a + b +c;
};

console.log(add({ a: 1, b:12 }, 100));


//renaming syntax
const { city, temp: temperature } = person.location;

if ( city && temperature ) {

console.log(`It is ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

// default value
const {name: publisherName = 'Self Published'} = book.publisher;

console.log(publisherName); // Penguin, if no name use default value of Self Published

*/ 
// Array destructuring 

const address = ['2194 Twain Ave', 'San Diagggo', 'California', '92008'];

const [, city, state = 'Kentuckyiii'] = address;
console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];


const [hot, costone, costtwo, costtrghre] = item;

console.log(`A medium ${hot} is ${costtwo}`);








