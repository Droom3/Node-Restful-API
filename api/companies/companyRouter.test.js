require('dotenv').config();
const request = require('supertest');
const server = require('../server');


describe('Testing company router', () => {
    describe('API is up and running', () => {
        it('should return 200 OK', function() {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.type).toMatch(/json/i);
                    expect(res.body.message).toBe("Droom app backend up and running");
                })
        })
    });

    describe('Testing if get requests work', () => {
        it('returns a list of companies when token is valid', async () => {
            const credentials = { username: 'lambdaschool', password: 'testing123!' }
            const loginResponse = await request(server)
            .post('/api/login')
            .send(credentials)
            const { body: {token}} = loginResponse;
            const headers = { 'Authorization': token };

            const response = await request(server)
                .get('/api/companies')
                .set(headers)

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true)
        })

        it('returns a specific company when asked', async () => {
            const credentials = { username: 'lambdaschool', password: 'testing123!' }
            const loginResponse = await request(server)
            .post('/api/login')
            .send(credentials)
            const { body: {token}} = loginResponse;
            const headers = { 'Authorization': token };

            const response = await request(server)
                .get('/api/companies/1')
                .set(headers)

            expect(response.status).toBe(200);
            expect(response.body.user_type).toBe(0)
        })
    })
})