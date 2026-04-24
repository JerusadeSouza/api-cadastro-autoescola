const { getState, getNextGastoId } = require("../Model/database");

function listarGastos(req, res) {
  const { veiculoId, tipo } = req.query;

  let gastos = [...getState().gastos];

  if (veiculoId) {
    gastos = gastos.filter((gasto) => gasto.veiculoId === veiculoId);
  }

  if (tipo) {
    gastos = gastos.filter((gasto) => gasto.tipo === tipo);
  }

  return res.status(200).json(gastos);
}

function buscarGastoPorId(req, res) {
  const id = Number(req.params.id);
  const gasto = getState().gastos.find((item) => item.id === id);

  if (!gasto) {
    return res.status(404).json({ message: "Gasto nao encontrado." });
  }

  return res.status(200).json(gasto);
}

function criarGasto(req, res) {
  const { veiculoId, tipo, valor, data, descricao } = req.body;

  if (!veiculoId || !tipo || typeof valor !== "number" || !data) {
    return res.status(400).json({
      message: "veiculoId, tipo, valor e data sao obrigatorios."
    });
  }

  const novoGasto = {
    id: getNextGastoId(),
    veiculoId,
    tipo,
    valor,
    data,
    descricao: descricao || ""
  };

  getState().gastos.push(novoGasto);

  return res.status(201).json(novoGasto);
}

function atualizarGasto(req, res) {
  const id = Number(req.params.id);
  const gasto = getState().gastos.find((item) => item.id === id);

  if (!gasto) {
    return res.status(404).json({ message: "Gasto nao encontrado." });
  }

  const { veiculoId, tipo, valor, data, descricao } = req.body;

  if (veiculoId !== undefined) gasto.veiculoId = veiculoId;
  if (tipo !== undefined) gasto.tipo = tipo;
  if (valor !== undefined) gasto.valor = valor;
  if (data !== undefined) gasto.data = data;
  if (descricao !== undefined) gasto.descricao = descricao;

  return res.status(200).json(gasto);
}

function deletarGasto(req, res) {
  const id = Number(req.params.id);
  const gastos = getState().gastos;
  const index = gastos.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Gasto nao encontrado." });
  }

  gastos.splice(index, 1);

  return res.status(204).send();
}

module.exports = {
  listarGastos,
  buscarGastoPorId,
  criarGasto,
  atualizarGasto,
  deletarGasto
};
