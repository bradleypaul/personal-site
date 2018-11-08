const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Currently under construction :).'));

app.listen(PORT, () => console.log(`Node.js app listening on port ${port}.`));
