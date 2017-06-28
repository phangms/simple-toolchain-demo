/**
 * 
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('root', function() {
	it('should say hello world');
});

it('should say hello world', function() {
	chai.request('http://localhost:6001').get('/').end(function(err, res) {
		expect(res).to.have.status(400);
	});
});
