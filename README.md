# API Cadastro Autoescola

API REST em Node.js para autenticação e controle de gastos dos veículos de uma autoescola.

O projeto usa armazenamento em memória, possui documentação Swagger e testes funcionais para os principais fluxos da aplicação.

## Objetivo

Esta API foi criada para apoiar o cadastro e acompanhamento de gastos de veículos, como:

- combustível
- óleo
- lavagem
- pastilha de freio
- velas

## Tecnologias

- Node.js
- Express
- Swagger UI
- Mocha
- Chai
- Supertest

## Estrutura do projeto

```text
.
|-- Controle/      # controllers da aplicação
|-- Model/         # estado em memória e dados iniciais
|-- Servers/       # configuração do app e rotas
|-- Swagger/       # especificação OpenAPI e Swagger UI
|-- fixtures/      # massa de dados para testes
|-- gastos/        # testes funcionais de gastos
|-- login/         # testes funcionais de login
|-- docs/          # documentação complementar do projeto
|-- index.js       # inicialização do servidor
|-- package.json
```

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação

```bash
npm install
```

## Como executar

Para iniciar a API localmente:

```bash
npm start
```

O servidor sobe por padrão na porta `3000`.

Se quiser alterar a porta:

```bash
PORT=4000 npm start
```

No Windows PowerShell:

```powershell
$env:PORT=4000
npm start
```

## Documentação da API

Com a aplicação em execução, acesse:

- Swagger UI: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Testes

Para rodar os testes automatizados:

```bash
npm test
```

Os testes cobrem os fluxos principais de:

- login
- listagem de gastos
- criação de gasto
- busca por ID
- atualização
- remoção

## Dados iniciais

Ao subir a aplicação, o estado inicial em memória contém:

### Usuário padrão

- `username`: `admin`
- `password`: `123456`
- `role`: `gestor`

### Gasto inicial

- `id`: `1`
- `veiculoId`: `CAR-001`
- `tipo`: `combustivel`
- `valor`: `350.75`
- `data`: `2026-04-01`

## Persistência

Os dados são mantidos apenas em memória.

Isso significa que:

- reiniciar a aplicação restaura os dados iniciais
- não há banco de dados configurado neste projeto

## Endpoints

### `POST /login`

Realiza autenticação com `username` e `password`.

Exemplo de requisição:

```json
{
  "username": "admin",
  "password": "123456"
}
```

Exemplo de resposta `200`:

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

### `GET /gastos`

Lista todos os gastos cadastrados.

Filtros opcionais por query string:

- `veiculoId`
- `tipo`

Exemplos:

- `GET /gastos`
- `GET /gastos?veiculoId=CAR-001`
- `GET /gastos?tipo=combustivel`

### `GET /gastos/:id`

Busca um gasto pelo identificador numérico.

### `POST /gastos`

Cria um novo gasto.

Campos obrigatórios:

- `veiculoId`
- `tipo`
- `valor` como número
- `data`

Exemplo de requisição:

```json
{
  "veiculoId": "CAR-003",
  "tipo": "lavagem",
  "valor": 80,
  "data": "2026-04-15",
  "descricao": "Lavagem completa"
}
```

### `PUT /gastos/:id`

Atualiza parcialmente um gasto existente.

Exemplo de requisição:

```json
{
  "valor": 95,
  "descricao": "Lavagem completa com higienização"
}
```

### `DELETE /gastos/:id`

Remove um gasto existente.

## Tipos de gasto aceitos

Segundo a especificação OpenAPI do projeto:

- `oleo`
- `combustivel`
- `lavagem`
- `pastilha_freio`
- `velas`

## Exemplos com cURL

### Login

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"admin\",\"password\":\"123456\"}"
```

### Listar gastos

```bash
curl http://localhost:3000/gastos
```

### Criar gasto

```bash
curl -X POST http://localhost:3000/gastos \
  -H "Content-Type: application/json" \
  -d "{\"veiculoId\":\"CAR-003\",\"tipo\":\"lavagem\",\"valor\":80,\"data\":\"2026-04-15\",\"descricao\":\"Lavagem completa\"}"
```

## Observações

- a API atualmente não valida autenticação nas rotas de gastos
- o token retornado no login é apenas ilustrativo
- o projeto é adequado para estudo, prototipação e testes funcionais
