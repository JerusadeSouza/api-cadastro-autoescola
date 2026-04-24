const request = require("supertest");
const { expect } = require("chai");
const app = require("../Servers/app");
const { resetState } = require("../Model/database");
const testState = require("../fixtures/testState.fixture");
const gastoFixture = require("../fixtures/gastos.fixture");

describe("Fluxo funcional de /gastos", () => {
  beforeEach(() => {
    resetState(testState);
  });

  it("deve listar os gastos cadastrados", async () => {
    const response = await request(app).get("/gastos");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
    expect(response.body[0].veiculoId).to.equal("CAR-001");
  });

  it("deve criar um novo gasto", async () => {
    const response = await request(app)
      .post("/gastos")
      .send(gastoFixture.novoGasto);

    expect(response.status).to.equal(201);
    expect(response.body.id).to.equal(2);
    expect(response.body.tipo).to.equal("lavagem");
  });

  it("deve buscar um gasto por id", async () => {
    const response = await request(app).get("/gastos/1");

    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(1);
  });

  it("deve atualizar um gasto existente", async () => {
    const response = await request(app)
      .put("/gastos/1")
      .send(gastoFixture.atualizacaoGasto);

    expect(response.status).to.equal(200);
    expect(response.body.valor).to.equal(95);
    expect(response.body.descricao).to.equal("Lavagem completa com higienizacao");
  });

  it("deve remover um gasto existente", async () => {
    const response = await request(app).delete("/gastos/1");

    expect(response.status).to.equal(204);

    const consulta = await request(app).get("/gastos/1");
    expect(consulta.status).to.equal(404);
  });
});
