const express = require('express');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const EvaluationController = require('./controllers/EvaluationController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.findById);
routes.put('/users/:id', UserController.delete);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/post', PostController.index);
routes.post('/users/:user_id/post', PostController.store);

routes.get('/posts/:post_id/:user_id/evaluation', EvaluationController.index);
routes.post('/posts/:post_id/:user_id/evaluation', EvaluationController.store);

module.exports = routes;
