const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('./auth/authRouter');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', authRouter);

server.get('/', (req, res) => {
    res.json({ message: 'Droom app backend up and running' })
})

module.exports = server;