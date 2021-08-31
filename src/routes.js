const express = require('express');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const EvaluationController = require('./controllers/EvaluationController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.findById);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/post', PostController.index);
routes.get('/users/:user_id/post', PostController.findById);
routes.put('/users/:user_id/post', PostController.update);
routes.delete('/users/:user_id/post', PostController.delete);
routes.post('/users/:user_id/post', PostController.store);

routes.get('/posts/:post_id/:user_id/evaluation', EvaluationController.index);
routes.get('/users/:user_id/post', EvaluationController.findById);
routes.put('/users/:user_id/post', EvaluationController.update);
routes.delete('/users/:user_id/post', EvaluationController.delete);
routes.post('/posts/:post_id/:user_id/evaluation', EvaluationController.store);

module.exports = routes;
