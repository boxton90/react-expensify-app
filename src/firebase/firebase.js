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

export { firebase, database as default }