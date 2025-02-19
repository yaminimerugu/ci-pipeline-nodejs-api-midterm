const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return Hello, CI/CD!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello, CI/CD!');
    });

    it('should return status 200', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });

    it('should return a string', async () => {
        const res = await request(app).get('/');
        expect(typeof res.text).toBe('string');
    });

    it('should not return an empty response', async () => {
        const res = await request(app).get('/');
        expect(res.text.length).toBeGreaterThan(0);
    });
});
