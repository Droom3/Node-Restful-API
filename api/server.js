const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/usersRouter');
const companiesRouter = require('./companies/companyRouter');
const matchesRouter = require('./matches/matchesRouter')
const imagesRouter = require('./images/imagesRouter');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/companies', companiesRouter);
server.use('/api/matches', matchesRouter);
server.use('/api/images', imagesRouter);

server.get('/', (req, res) => {
    res.json({ message: 'Droom app backend up and running' })
})

module.exports = server;