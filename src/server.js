const express = require('express');
const routes = require('./routes');
const session = require('express-session');

require('./database');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'hj§IR.fZ(7myh{dXqw', coockie: { maxAge: 604800000 }
}));

app.use(routes);

app.listen(3000,async () => {
  console.log('Server running on port 3000...');
});
