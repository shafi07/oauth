const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.should();

chai.use(chaiHttp);

describe("Scrape API", () => {
	describe("GET /Oauth", () => {
		// Application running

		it("oauth for autharaization", (done) => {
			chai.request(server)
				.get("/")
				.end((err, response) => {
					response.should.have.status(200);
					done();
				});
        }).timeout(15000);
        
		// Accessing success route without authorization

		it("try to access the success route without authorization", (done) => {
			chai.request(server)
				.get("/good")
				.end((err, response) => {
					response.should.have.status(401);
					done();
				});
        }).timeout(15000);

        // Redirection to google callback
        
         it("oauth google page", (done) => {
				chai.request(server)
					.get("/google")
					.end((err, response) => {
						response.should.have.status(200);
						done();
					});
			}).timeout(15000);

	});
});
