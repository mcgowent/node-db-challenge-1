const express = require('express');

const ProjectRouter = require('./recipes/project-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);

module.exports = server;