var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "./slrtsalgo-e12e0831ed43.json",
    databaseURL: "https://slrtsalgo.firebaseio.com"
});

var ref = firebase.database().ref('node-client');
var messageRef = ref.child('message/namesh');

//with push key
//var messageRef = messageRef.push();

//Set Values
messageRef.set({
    name: 'Namesh',
    admin: true,
    count: 1,
    text: 'Hey Guys'
});

//Update Values
messageRef.update({
    name: 'Namesh',
    admin: true,
    count: 6,
    text: 'Hey Guys'
});

//retrive data
messageRef.once('value').then(function(snap){
    console.log(snap.key, "\n");
    console.log(snap.ref.toString(), "\n");
    hey = snap.val();
    console.log(snap.val());
    console.log(hey.admin);
    if('Namesh' === hey.name ){
        console.log('yes');
    } 
});







