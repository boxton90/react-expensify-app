import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDjiD51uaM0NyQtZcLw1wtrRgqtzILvJWU",
    authDomain: "expensify-35050.firebaseapp.com",
    databaseURL: "https://expensify-35050.firebaseio.com",
    projectId: "expensify-35050",
    storageBucket: "expensify-35050.appspot.com",
    messagingSenderId: "1054826667109"
};

firebase.initializeApp(config);

const database = firebase.database()

// const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// },
// {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 23123
// },
// {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: 6767233
// }]

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').push(expenses[0])
// database.ref('expenses').push(expenses[2])
// database.ref('expenses').push(expenses[1])

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Redux'
// })

// database.ref('notes/-LXdApL13vhDrn1_P6nR').remove()

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log(e)
// })

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Daniel',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Madrid',
//         country: 'Spain'
//     }
// }).then(() => {
//     console.log('Data is saved.')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref()
//     .remove()
//     .then(() => { console.log('Data was remove') })
//     .catch((e) => { console.log('Did not remove data', e) })