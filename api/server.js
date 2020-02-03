const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('./auth/authRouter');
const jobseekersRouter = require('./jobseekers/jobseekersRouter');
const companiesRouter = require('./companies/companyRouter');
const jobsRouter = require('./jobs/jobRouter');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', authRouter);
server.use('/api/jobseekers', jobseekersRouter);
server.use('/api/companies', companiesRouter);
server.use('/api/jobs', jobsRouter);

server.get('/', (req, res) => {
    res.json({ message: 'Droom app backend up and running' })
})

module.exports = server;