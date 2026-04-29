# AUT-1 - Prototipos para aplicacao web

Fonte: Jira AUT-1 e historias AUT-2 a AUT-9.

## Objetivo do produto

Aplicacao web para que o gestor da autoescola acompanhe gastos dos veiculos, com login autenticado, cadastro, consulta, atualizacao, exclusao, filtros por veiculo e tipo de gasto, alem de acesso a documentacao Swagger da API.

## Estrategia de telas

Para economizar telas sem prejudicar a usabilidade, o prototipo deve ter 3 telas principais:

1. Login
2. Painel de gastos
3. Documentacao da API

O CRUD completo fica concentrado no Painel de gastos: filtros, lista, resumo financeiro, formulario de criacao/edicao, painel de detalhe e confirmacao de exclusao.

## Tela 1 - Login

### Layout

- Frame desktop 1440 x 900.
- Fundo neutro claro.
- Area central com formulario compacto.
- Painel lateral discreto com nome do produto e indicadores de valor.

### Conteudo

- Produto: Controle de gastos da autoescola.
- Campo Username.
- Campo Password.
- Botao Entrar.
- Estado de erro 401: credenciais invalidas.
- Estado de erro 400: username ou password obrigatorio.

### Historias cobertas

- AUT-2 Realizar login na aplicacao.

## Tela 2 - Painel de gastos

### Layout

- Frame desktop 1440 x 1024.
- Barra superior com nome do produto, usuario logado e atalho para Swagger.
- Sidebar estreita com duas secoes: Gastos e API.
- Conteudo principal em grid:
  - Linha superior: cards de resumo.
  - Area central esquerda: filtros e tabela de gastos.
  - Area lateral direita: formulario de novo gasto ou edicao.
  - Drawer/painel inferior ou lateral integrado: detalhe do gasto selecionado.

### Cards de resumo

- Total do mes.
- Maior categoria.
- Veiculo com maior gasto.
- Quantidade de registros.

### Filtros

- Select Veiculo.
- Select Tipo de gasto.
- Botao Aplicar filtros.
- Botao Limpar.
- Texto de resultado: exibindo registros filtrados.

### Tabela de gastos

Colunas:

- ID
- Veiculo
- Tipo
- Valor
- Data
- Descricao curta
- Acoes

Acoes por linha:

- Ver detalhes.
- Editar.
- Excluir.

### Formulario de cadastro/edicao

Campos:

- Veiculo.
- Tipo.
- Valor.
- Data.
- Descricao.

Estados:

- Novo gasto.
- Editando gasto existente.
- Validacao de obrigatorios: veiculo, tipo, valor e data.
- Sucesso 201 para criacao.
- Sucesso 200 para atualizacao.
- Erro 404 quando o gasto nao existir.

### Detalhe do gasto

Mostra:

- Identificador.
- Veiculo.
- Tipo.
- Valor formatado.
- Data.
- Descricao completa.
- Botoes Editar e Excluir.

### Confirmacao de exclusao

Modal simples:

- Titulo: Excluir gasto?
- Texto com identificador e valor.
- Botao Cancelar.
- Botao Excluir.
- Sucesso 204.
- Erro 404 se registro nao existir.

### Estado vazio

Quando nao houver registros:

- Mensagem: Nenhum gasto cadastrado.
- Acao primaria: Cadastrar gasto.

### Historias cobertas

- AUT-3 Cadastrar gasto de veiculo.
- AUT-4 Listar gastos cadastrados.
- AUT-5 Consultar gasto por identificador.
- AUT-6 Atualizar gasto existente.
- AUT-7 Excluir gasto existente.
- AUT-8 Filtrar gastos por veiculo e tipo.

## Tela 3 - Documentacao da API

### Layout

- Frame desktop 1440 x 900.
- Mesma barra superior do painel.
- Conteudo em duas colunas:
  - Esquerda: navegacao de endpoints.
  - Direita: pre-visualizacao estilo Swagger.

### Endpoints visiveis

- POST /login
- GET /gastos
- POST /gastos
- GET /gastos/{id}
- PATCH /gastos/{id}
- DELETE /gastos/{id}

### Conteudo por endpoint

- Metodo e rota.
- Resumo.
- Exemplo basico de requisicao.
- Exemplo basico de resposta.
- Codigos principais: 200, 201, 204, 400, 401, 404.

### Historias cobertas

- AUT-9 Acessar documentacao Swagger da API.

## Notas de usabilidade

- O Painel de gastos deve ser a tela de trabalho principal, evitando telas separadas para criar, editar e consultar.
- Criacao e edicao usam o mesmo formulario lateral para reduzir redundancia.
- Consulta por ID aparece como detalhe ao selecionar uma linha.
- Exclusao usa modal apenas no momento critico.
- O link para Swagger fica sempre disponivel na barra superior e na sidebar.

## Paleta sugerida

- Fundo: cinza muito claro.
- Superficie: branco.
- Texto principal: grafite.
- Primario: verde escuro ou azul petroleo.
- Destaque financeiro: verde.
- Alerta/exclusao: vermelho contido.

## Componentes necessarios no Figma

- Botao primario, secundario e destrutivo.
- Campo de texto.
- Select.
- Card de metrica.
- Tabela de dados.
- Badge de tipo de gasto.
- Modal de confirmacao.
- Painel lateral de formulario.
- Bloco de endpoint estilo Swagger.
