const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initializeFirebase } = require('./firebase/firebase');

const app = express();
const PORT = 5000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/repositories', require('./routes/repositories.js'));
app.use('/favorites', require('./routes/favorites.js'));

app.listen(PORT, (error) => {
    initializeFirebase();
    if (!error)
        console.log("Server is successfully running. App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
});
