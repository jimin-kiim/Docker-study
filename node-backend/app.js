const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api', (req, res) => {
    res.send('sample api response');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});