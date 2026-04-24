const { getState } = require("../Model/database");

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username e password sao obrigatorios."
    });
  }

  const user = getState().users.find(
    (item) => item.username === username && item.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Credenciais invalidas."
    });
  }

  return res.status(200).json({
    message: "Login realizado com sucesso.",
    token: `token-${user.id}-${user.username}`,
    user: {
      id: user.id,
      username: user.username,
      role: user.role
    }
  });
}

module.exports = {
  login
};
