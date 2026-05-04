# Casos de Teste de API - AUT-1

Epic: [AUT-1 - Controle de gastos dos veiculos da autoescola](https://jerusa24souza.atlassian.net/browse/AUT-1)

Swagger utilizado: `Swagger/openapi.json`

## Observacao

Os casos abaixo foram definidos com base nas User Stories filhas de `AUT-1` e nos endpoints documentados no Swagger:

- `POST /login`
- `GET /gastos`
- `POST /gastos`
- `GET /gastos/{id}`
- `PUT /gastos/{id}`
- `DELETE /gastos/{id}`

A User Story `AUT-9` trata do acesso a documentacao Swagger, mas o endpoint da documentacao nao esta descrito no OpenAPI. Por isso, nao foi criado caso de teste de API para ela neste documento.

## AUT-2 - Realizar login na aplicacao

### [AUT-38] [Caso de Testes] Login com credenciais validas

Subtarefa Jira: [AUT-38](https://jerusa24souza.atlassian.net/browse/AUT-38)

**Titulo:** Login com credenciais validas

**Operacao (Metodo e Endpoint):** `POST /login`

**Corpo da requisicao:**

```json
{
  "username": "admin",
  "password": "123456"
}
```

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
{
  "message": "Login realizado com sucesso.",
  "token": "token-1-admin",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "gestor"
  }
}
```

### [AUT-39] [Caso de Testes] Login sem username ou password

Subtarefa Jira: [AUT-39](https://jerusa24souza.atlassian.net/browse/AUT-39)

**Titulo:** Login sem username ou password

**Operacao (Metodo e Endpoint):** `POST /login`

**Corpo da requisicao:**

```json
{
  "username": "admin"
}
```

**Status Code da Resposta:** `400`

**Corpo da Resposta:**

```json
{
  "message": "Username e password sao obrigatorios."
}
```

### [AUT-40] [Caso de Testes] Login com credenciais invalidas

Subtarefa Jira: [AUT-40](https://jerusa24souza.atlassian.net/browse/AUT-40)

**Titulo:** Login com credenciais invalidas

**Operacao (Metodo e Endpoint):** `POST /login`

**Corpo da requisicao:**

```json
{
  "username": "admin",
  "password": "senha-incorreta"
}
```

**Status Code da Resposta:** `401`

**Corpo da Resposta:**

```json
{
  "message": "Credenciais invalidas."
}
```

## AUT-3 - Cadastrar gasto de veiculo

### [AUT-41] [Caso de Testes] Cadastrar gasto com dados validos

Subtarefa Jira: [AUT-41](https://jerusa24souza.atlassian.net/browse/AUT-41)

**Titulo:** Cadastrar gasto com dados validos

**Operacao (Metodo e Endpoint):** `POST /gastos`

**Corpo da requisicao:**

```json
{
  "veiculoId": "CAR-002",
  "tipo": "oleo",
  "valor": 189.9,
  "data": "2026-04-10",
  "descricao": "Troca de oleo e filtro"
}
```

**Status Code da Resposta:** `201`

**Corpo da Resposta:**

```json
{
  "id": 2,
  "veiculoId": "CAR-002",
  "tipo": "oleo",
  "valor": 189.9,
  "data": "2026-04-10",
  "descricao": "Troca de oleo e filtro"
}
```

### [AUT-42] [Caso de Testes] Cadastrar gasto sem campos obrigatorios

Subtarefa Jira: [AUT-42](https://jerusa24souza.atlassian.net/browse/AUT-42)

**Titulo:** Cadastrar gasto sem campos obrigatorios

**Operacao (Metodo e Endpoint):** `POST /gastos`

**Corpo da requisicao:**

```json
{
  "veiculoId": "CAR-002",
  "tipo": "oleo"
}
```

**Status Code da Resposta:** `400`

**Corpo da Resposta:**

```json
{
  "message": "veiculoId, tipo, valor e data sao obrigatorios."
}
```

## AUT-4 - Listar gastos cadastrados

### [AUT-43] [Caso de Testes] Listar gastos cadastrados

Subtarefa Jira: [AUT-43](https://jerusa24souza.atlassian.net/browse/AUT-43)

**Titulo:** Listar gastos cadastrados

**Operacao (Metodo e Endpoint):** `GET /gastos`

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
[
  {
    "id": 1,
    "veiculoId": "CAR-001",
    "tipo": "combustivel",
    "valor": 350.75,
    "data": "2026-04-01",
    "descricao": "Abastecimento do inicio do mes"
  }
]
```

### [AUT-44] [Caso de Testes] Listar gastos quando nao houver registros

Subtarefa Jira: [AUT-44](https://jerusa24souza.atlassian.net/browse/AUT-44)

**Titulo:** Listar gastos quando nao houver registros

**Operacao (Metodo e Endpoint):** `GET /gastos`

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
[]
```

## AUT-5 - Consultar gasto por identificador

### [AUT-45] [Caso de Testes] Consultar gasto existente por ID

Subtarefa Jira: [AUT-45](https://jerusa24souza.atlassian.net/browse/AUT-45)

**Titulo:** Consultar gasto existente por ID

**Operacao (Metodo e Endpoint):** `GET /gastos/1`

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
{
  "id": 1,
  "veiculoId": "CAR-001",
  "tipo": "combustivel",
  "valor": 350.75,
  "data": "2026-04-01",
  "descricao": "Abastecimento do inicio do mes"
}
```

### [AUT-46] [Caso de Testes] Consultar gasto inexistente por ID

Subtarefa Jira: [AUT-46](https://jerusa24souza.atlassian.net/browse/AUT-46)

**Titulo:** Consultar gasto inexistente por ID

**Operacao (Metodo e Endpoint):** `GET /gastos/999`

**Status Code da Resposta:** `404`

**Corpo da Resposta:**

```json
{
  "message": "Gasto nao encontrado."
}
```

## AUT-6 - Atualizar gasto existente

### [AUT-47] [Caso de Testes] Atualizar parcialmente gasto existente

Subtarefa Jira: [AUT-47](https://jerusa24souza.atlassian.net/browse/AUT-47)

**Titulo:** Atualizar parcialmente gasto existente

**Operacao (Metodo e Endpoint):** `PUT /gastos/1`

**Corpo da requisicao:**

```json
{
  "valor": 210,
  "descricao": "Ajuste do valor da troca de oleo"
}
```

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
{
  "id": 1,
  "veiculoId": "CAR-001",
  "tipo": "combustivel",
  "valor": 210,
  "data": "2026-04-01",
  "descricao": "Ajuste do valor da troca de oleo"
}
```

### [AUT-48] [Caso de Testes] Atualizar gasto inexistente

Subtarefa Jira: [AUT-48](https://jerusa24souza.atlassian.net/browse/AUT-48)

**Titulo:** Atualizar gasto inexistente

**Operacao (Metodo e Endpoint):** `PUT /gastos/999`

**Corpo da requisicao:**

```json
{
  "valor": 210
}
```

**Status Code da Resposta:** `404`

**Corpo da Resposta:**

```json
{
  "message": "Gasto nao encontrado."
}
```

## AUT-7 - Excluir gasto existente

### [AUT-49] [Caso de Testes] Excluir gasto existente

Subtarefa Jira: [AUT-49](https://jerusa24souza.atlassian.net/browse/AUT-49)

**Titulo:** Excluir gasto existente

**Operacao (Metodo e Endpoint):** `DELETE /gastos/1`

**Status Code da Resposta:** `204`

**Corpo da Resposta:** Nao possui.

### [AUT-50] [Caso de Testes] Excluir gasto inexistente

Subtarefa Jira: [AUT-50](https://jerusa24souza.atlassian.net/browse/AUT-50)

**Titulo:** Excluir gasto inexistente

**Operacao (Metodo e Endpoint):** `DELETE /gastos/999`

**Status Code da Resposta:** `404`

**Corpo da Resposta:**

```json
{
  "message": "Gasto nao encontrado."
}
```

## AUT-8 - Filtrar gastos por veiculo e tipo

### [AUT-51] [Caso de Testes] Filtrar gastos por veiculo

Subtarefa Jira: [AUT-51](https://jerusa24souza.atlassian.net/browse/AUT-51)

**Titulo:** Filtrar gastos por veiculo

**Operacao (Metodo e Endpoint):** `GET /gastos?veiculoId=CAR-001`

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
[
  {
    "id": 1,
    "veiculoId": "CAR-001",
    "tipo": "combustivel",
    "valor": 350.75,
    "data": "2026-04-01",
    "descricao": "Abastecimento do inicio do mes"
  }
]
```

### [AUT-52] [Caso de Testes] Filtrar gastos por tipo

Subtarefa Jira: [AUT-52](https://jerusa24souza.atlassian.net/browse/AUT-52)

**Titulo:** Filtrar gastos por tipo

**Operacao (Metodo e Endpoint):** `GET /gastos?tipo=combustivel`

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
[
  {
    "id": 1,
    "veiculoId": "CAR-001",
    "tipo": "combustivel",
    "valor": 350.75,
    "data": "2026-04-01",
    "descricao": "Abastecimento do inicio do mes"
  }
]
```

### [AUT-54] [Caso de Testes] Filtrar gastos por veiculo e tipo

Subtarefa Jira: [AUT-54](https://jerusa24souza.atlassian.net/browse/AUT-54)

**Titulo:** Filtrar gastos por veiculo e tipo

**Operacao (Metodo e Endpoint):** `GET /gastos?veiculoId=CAR-001&tipo=combustivel`

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
[
  {
    "id": 1,
    "veiculoId": "CAR-001",
    "tipo": "combustivel",
    "valor": 350.75,
    "data": "2026-04-01",
    "descricao": "Abastecimento do inicio do mes"
  }
]
```

### [AUT-53] [Caso de Testes] Filtrar gastos sem registros compativeis

Subtarefa Jira: [AUT-53](https://jerusa24souza.atlassian.net/browse/AUT-53)

**Titulo:** Filtrar gastos sem registros compativeis

**Operacao (Metodo e Endpoint):** `GET /gastos?veiculoId=CAR-999&tipo=lavagem`

**Status Code da Resposta:** `200`

**Corpo da Resposta:**

```json
[]
```
