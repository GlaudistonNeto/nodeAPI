const express = require('express');
const routes = require('./routes');
const cryptography = require('./util/cryptography');
//require('./database');

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3000,async () => {
  console.log( 'hash password = '+await cryptography.generateHash('password'))
  console.log('Server running on port 3000...');
});
