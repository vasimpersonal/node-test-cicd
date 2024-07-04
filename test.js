// test.js
const request = require('supertest');
const express = require('express');
const app = require('../app');

describe('GET /', function() {
    it('responds with Hello World', function(done) {
        request(app)
            .get('/')
            .expect('Hello World!', done);
    });
});
