const express = require('express');
const router = express.Router();
const { setFavorites } = require('../firebase/firebase');

router.put('/', function (req, res) {
    setFavorites(req.body).then((favorites) => {
        res.status(200).json(favorites);
    }).catch(err => res.status(500).send(err));
});


module.exports = router;
