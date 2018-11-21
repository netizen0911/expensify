const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};

const { name = 'Anonymous', age } = person;
console.log( `${name} is ${age}.` );

const { city, temp: temperature } = person.location;
if ( city && temperature ) {
  console.log(`It's ${temperature} in ${city}.`);
}