const request = require("supertest");
const { expect } = require("chai");
const app = require("../Servers/app");
const { resetState } = require("../Model/database");
const testState = require("../fixtures/testState.fixture");
const authFixture = require("../fixtures/auth.fixture");

describe("POST /login", () => {
  beforeEach(() => {
    resetState(testState);
  });

  it("deve realizar login com credenciais validas", async () => {
    const response = await request(app)
      .post("/login")
      .send(authFixture.validLogin);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("token");
    expect(response.body.user.username).to.equal("admin");
  });

  it("deve retornar 401 quando as credenciais forem invalidas", async () => {
    const response = await request(app)
      .post("/login")
      .send(authFixture.invalidLogin);

    expect(response.status).to.equal(401);
    expect(response.body.message).to.equal("Credenciais invalidas.");
  });
});
