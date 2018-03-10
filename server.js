const express = require('express');

const app = express();

const routes = require('./routes/index.js');
app.use('/', routes);

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//     {id: 4, firstName: 'Joe', lastName: 'Shmoe'}
//   ];

//   res.json(customers);
// });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);