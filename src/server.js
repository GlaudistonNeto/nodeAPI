const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3000,async () => {
  console.log('Server running on port 3000...');
});
