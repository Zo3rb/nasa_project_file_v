const request = require('supertest');
const app = require('../../app');

describe('TEST /GET /launches', () => {
    test('It should respond with 200 success', async () => {
        await request(app).get('/launches').expect(200);
    });
});


describe('TEST /POST /launches', () => {
    test('It should response with 201 created', async () => {
        await request(app).post('/launches').send({
            mission: "USS Enterprise",
            rocket: "NCC 1700",
            target: "Kepler-185 f",
            launchDate: "January 4, 2028"
        }).expect('Content-Type', /json/).expect(201);
    });

    test('It should catch missing required properties 400 bad request', async () => {
        await request(app).post('/launches').send({
            mission: "USS Enterprise",
            rocket: "NCC 1700"
        }).expect('Content-Type', /json/).expect(400);
    });

    test('It should catch invalid dates 400 bad request', async () => {
        await request(app).post('/launches').send({
            mission: "USS Enterprise",
            rocket: "NCC 1700",
            target: "Kepler-185 f",
            launchDate: "Bad Launch Date"
        }).expect('Content-Type', /json/).expect(400);
    });
});