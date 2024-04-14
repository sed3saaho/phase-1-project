const express = require('express');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;
const apiUrl = 'https://api.openbrewerydb.org/breweries';

app.get('/breweries', async (req, res) => {
    try {
        const response = await fetchData(apiUrl);
        res.json(response);
    } catch (error) {
        console.error('Error fetching breweries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

function fetchData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});