const admin = require('firebase-admin');
const { firebaseConfig, serviceAccount } = require('./config');

const initializeFirebase = () => {
    firebaseConfig.credential = admin.credential.cert(serviceAccount);
    admin.initializeApp(firebaseConfig);
};

const getFavorites = () => {
    return new Promise((resolve, reject) => {
        admin.firestore().collection("favorites").doc("user").get()
            .then((response) => resolve(response.data()))
            .catch((error) => reject(error));
    });
}

const setFavorites = (ids) => {
    return new Promise((resolve, reject) => {
        admin.firestore().collection("favorites").doc("user").set({ repoIds: ids })
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

module.exports = {
    initializeFirebase,
    getFavorites,
    setFavorites
}