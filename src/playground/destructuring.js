// Object Destructuring

// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };

// const { name = 'Anonymous', age } = person;
// console.log( `${name} is ${age}.` );

// const { city, temp: temperature } = person.location;
// if ( city && temperature ) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);


// Array Destructuring

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state = 'New York', zip] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const[drink, small, medium, large] = item;
console.log(`A medium ${drink} costs ${medium}.`);