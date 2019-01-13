// Object desctructuring

// const person = {
//     name: 'Daniel',
//     age: 28,
//     location: {
//         city: 'Madrid',
//         temp: 4
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

// Array desctructuring

// const address = ['Calle Lopera 1234', 'Madrid', 'Madrid', '13442']
// const [, city, state = 'New York'] = address
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} cost ${mediumPrice}`)