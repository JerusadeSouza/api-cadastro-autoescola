const express = require("express");
const authController = require("../Controle/authController");
const gastoController = require("../Controle/gastoController");

const router = express.Router();

router.post("/login", authController.login);
router.get("/gastos", gastoController.listarGastos);
router.get("/gastos/:id", gastoController.buscarGastoPorId);
router.post("/gastos", gastoController.criarGasto);
router.put("/gastos/:id", gastoController.atualizarGasto);
router.delete("/gastos/:id", gastoController.deletarGasto);

module.exports = router;
