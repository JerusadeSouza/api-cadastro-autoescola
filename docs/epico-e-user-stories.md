# Epico

**Nome:** Controle de gastos dos carros da autoescola

Como gestor da autoescola,
quero registrar e consultar os gastos mensais de cada veículo,
para acompanhar custos operacionais, apoiar decisões de manutencao e manter previsibilidade financeira.

# Objetivo do produto

Permitir o cadastro, consulta, atualizacao e exclusao de gastos por veiculo, com autenticacao de usuario e documentacao interativa da API.

# User Stories

1. Como gestor, quero realizar login na aplicacao para acessar as funcionalidades de controle de gastos com seguranca.
2. Como gestor, quero cadastrar um gasto de um veiculo informando tipo, valor, data e descricao para manter o historico mensal atualizado.
3. Como gestor, quero listar todos os gastos cadastrados para acompanhar rapidamente os custos dos veiculos.
4. Como gestor, quero consultar um gasto especifico por identificador para analisar um registro com mais detalhe.
5. Como gestor, quero atualizar um gasto ja cadastrado para corrigir valores, datas ou descricoes quando necessario.
6. Como gestor, quero remover um gasto indevido para manter a base consistente.
7. Como gestor, quero filtrar gastos por veiculo e tipo para analisar categorias de custo com mais precisao.
8. Como gestor, quero acessar a documentacao Swagger com exemplos de requisicao para facilitar testes e integracao.

# Criterios de aceite sugeridos

1. O login deve validar usuario e senha e retornar token de acesso quando os dados estiverem corretos.
2. O cadastro de gasto deve exigir veiculoId, tipo, valor e data.
3. O endpoint de listagem deve retornar os registros cadastrados e aceitar filtros opcionais.
4. O endpoint de consulta por id deve retornar 404 quando o registro nao existir.
5. O endpoint de atualizacao deve permitir alterar parcialmente os dados do gasto.
6. O endpoint de exclusao deve remover o registro e responder com status 204.
7. Os testes funcionais devem usar fixtures e resetar os dados a cada execucao.
8. O Swagger deve disponibilizar os endpoints `/login` e `/gastos` com exemplos para POST.
