const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Currently under construction :).'));

app.listen(3000, () => console.log('Node.js app listening on port 3000.'));