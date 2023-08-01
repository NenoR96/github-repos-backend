const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const { getFavorites } = require('../firebase/firebase');

router.get('/', function (req, res) {
    const API_URL = "https://api.github.com/search/repositories";
    const token = "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";

    const headers = new fetch.Headers();
    headers.append("Accept", "application/vnd.github+json");
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("X-GitHub-Api-Version", "2022-11-28");

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const isoString = sevenDaysAgo.toISOString().split("T")[0];

    fetch(`${API_URL}?q=created:>${isoString}&sort=stars`, requestOptions)
        .then(response => response.json())
        .then(repositories => {
            getFavorites().then((favorites) => {
                repositories.items.forEach(item => {
                    if (favorites.repoIds.find(el => el === item.id))
                        item.isFavorite = true;
                });

                res.status(200).json({ repositories, favorites });
            }).catch(error => res.status(500).send(error));
        })
        .catch(error => res.status(500).send(error));
});

module.exports = router;
