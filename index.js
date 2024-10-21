const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! ');
});

app.get('/api/artists', (req, res) => {
    res.send([
        "JB",
        "Beyonce",
    ]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})