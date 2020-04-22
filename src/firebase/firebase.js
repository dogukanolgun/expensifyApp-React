import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAUVXlbBAtHSvjt97_y3BSJwKl2DLjAtcw',
  authDomain: 'expensify-andrew-mead.firebaseapp.com',
  databaseURL: 'https://expensify-andrew-mead.firebaseio.com',
  projectId: 'expensify-andrew-mead',
  storageBucket: 'expensify-andrew-mead.appspot.com',
  messagingSenderId: '189692232663',
  appId: '1:189692232663:web:2567267fc955dfc0b04192'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 109238,
//   createdAt: 9028470912
// });

// database.ref('notes/-M5WMjYTP669vP_1NKc0').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'Next.js angular Vue'
// });

/////////////////////////////////////////////////////////////////////////////

// const firebaseNotes = {
//   notes: {
//     apofekef: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     g3rfet4ggf: {
//       title: 'Another note!',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [
//   {
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
//   },
//   {
//     id: '7321fvd',
//     title: 'Another note!',
//     body: 'This is my note'
//   }
// ];

// database.ref('notes').set(notes);

/////////////////////////////////////////////////////////////////////////////////

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

/////////////////////////////////////////////////////////////////////////////

// database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (err) => {
//     console.log('Error with data fetching', err);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(20);
// }, 3500);

// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(21);
// }, 10500);

////////////////////////////////////////////////////////////////////////

// database
//   .ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log('Error fetching data: ', err);
//   });

////////////////////////////////////////////////////////////////////////

// database
//   .ref()
//   .set({
//     name: 'Dogukan',
//     age: 26,
//     stressLevel: 4,
//     job: {
//       title: 'software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Bucharest',
//       country: 'Romania'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((err) => {
//     console.log('This failed', e);
//   });

///////////////////////////////////////////////////////////////////////

// database.ref().update({
//   stressLevel: 6,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

////////////////////////////////////////////////////////////////////////

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('isSingle successfully removed');
//   })
//   .catch((err) => {
//     console.log('Remove failed: ', err);
//   });
