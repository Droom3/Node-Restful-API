const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/dbConfig');

describe('Matches', function() {

    describe('API is up and running', function() {
        it('should return 200 OK', function() {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })

})