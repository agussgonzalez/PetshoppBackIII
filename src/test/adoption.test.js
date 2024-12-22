import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Adoption Router", () => {
    it("Debería obtener todas las solicitudes de adopción", (done) => {
        chai.request(app)
            .get("/api/adoptions")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });
    });

    it("Debería crear una solicitud de adopción", (done) => {
        chai.request(app)
            .post("/api/adoptions")
            .send({ petId: "123", userId: "456" })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property("id");
                done();
            });
    });
});
