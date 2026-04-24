const initialData = require("./initialData");

const clone = (data) => JSON.parse(JSON.stringify(data));

let state = clone(initialData);

function getState() {
  return state;
}

function resetState(customState) {
  state = clone(customState || initialData);
}

function getNextGastoId() {
  if (state.gastos.length === 0) {
    return 1;
  }

  return Math.max(...state.gastos.map((gasto) => gasto.id)) + 1;
}

module.exports = {
  getState,
  resetState,
  getNextGastoId
};
