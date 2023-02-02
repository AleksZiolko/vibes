const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase again!");
});

exports.isLoggedIn = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Not logged in");
});

exports.echo = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("The data passed in is " + request.query.data);
});

// Accept comment and return the same comment to the user
exports.postcomment = functions.https.onRequest((request, response) => {
    // 1. Receive comment data in here from user POST request
    // 2. Connect to our Firestore database
    const currentTime = admin.firestore.Timestamp.now();
    request.body.timestamp = currentTime;

    return admin.firestore().collection('comments').
    add(request.body).then(()=>{
        response.send("Saved in the database");
    });

});

exports.getcomments = functions.https.onRequest((request, response) => {

    // 1. Connect to our Firestore database
    let myData = [];
    return admin.firestore().collection('comments').orderBy('timestamp').get().then((snapshot) => {

        if (snapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }

        snapshot.forEach(doc => {
            myData.push(doc.data());
        });

        // 2. Send data back to client
        response.send(myData);
    })
});
