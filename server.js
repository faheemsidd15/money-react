const express = require('express');

const app = express();

const routes = require('./routes/index.js');
app.use('/', routes);



const port = 5000;

app.listen(port, () => `Server running on port ${port}`);