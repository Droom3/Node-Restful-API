require('dotenv').config();

const request = require('supertest');

const server = require('../server');
const db = require('../../data/dbConfig');

const aUser = { username: "jonahaitchison", password: "testing123!" };
const aCompany = { username: "google", password: "testing123!" };

describe('Matches', function() {

    describe('API is up and running', function() {
        it('should return 200 OK', function() {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.type).toMatch(/json/i);
                    expect(res.body.message).toBe("Droom app backend up and running");
                })
        })
    })

    describe('Log user in', function() {
        let userAuth;

        it('Logging in a User and return a token', function() {
            return request(server).post('/api/login').send(aUser)
                .then(res => {
                    expect(res.status).toEqual(200);
                    expect(res.type).toMatch(/json/i);
                    userAuth = res.body.token;
                })

        });

        it('Return a list of matched/liked companies', function() {
            return request(server).get('/api/matches').set({Authorization: userAuth})
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.type).toMatch(/json/i)
                }) 
        });

        it('Add a match for logged in user', function() {
            return request(server).post('/api/matches/3').set({Authorization: userAuth})
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        });

        it('Delete a match/like', function() {
            return request(server).delete('/api/matches/3').set({Authorization: userAuth})
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                })
        })
    });

    describe('Log comany in', function() {
        let companyAuth;

        it('Login a company and returning a token', function() {
            return request(server).post('/api/login').send(aCompany)
            .then(res => {
                expect(res.status).toEqual(201);
                expect(res.type).toMatch(/json/i);
                companyAuth = res.body.token;
            })
        })

        it('Return a list of matched/liked users', function() {
            return request(server).get('/api/matches').set({Authorization: companyAuth})
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.type).toMatch(/json/i);
                })
        })
    })

    describe('Predefined Users and Companies', function() {
        it('list of users', async function() {
            const userList = await db('users');
            expect(userList).toHaveLength(4); // three default users
        })

        it('list of companies', async function() {
            const companyList = await db('companies');
            expect(companyList).toHaveLength(4); // three default companies
        })
    })

});