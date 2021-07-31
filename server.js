const express = require('express');
const studantRoutes = require('./src/student/routes');

const app = require('express')();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`app listenning on port ${3000}`);
});

app.use('/api/v1/students', studantRoutes);

app.listen(port, () => console.log(`app listenning on port ${3000}`));
