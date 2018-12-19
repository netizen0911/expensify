import * as firebase from 'firebase';
import expenses from '../selectors/expenses';

const config = {
  apiKey: "AIzaSyAzlaMeuOAsorDQLfR_yXaZ3wWBRuYDNeU",
  authDomain: "expensify-10ecc.firebaseapp.com",
  databaseURL: "https://expensify-10ecc.firebaseio.com",
  projectId: "expensify-10ecc",
  storageBucket: "expensify-10ecc.appspot.com",
  messagingSenderId: "929577673959"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default}

// //child_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added event
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763,
//   tags: 'rent, rental, expense'
// });

// database.ref().set({
//   name: 'Paul G.',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'Manila',
//     country: 'Philippines'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This failed!', e);
// });

// database.ref().update({
//   name: 'Mike',
//   age:29,
//   job: 'Software developer',
//   isSingle: null,
//   'location/city': 'New York'
// });

// database.ref('isSingle').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed.');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });