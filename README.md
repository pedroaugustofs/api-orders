Este projeto consiste no desenvolvimento de uma API REST em Node.js para gerenciamento de pedidos.

A API permite realizar operações básicas de CRUD (Create, Read, Update e Delete) em pedidos, armazenando os dados em um banco de dados MongoDB.

Durante o processamento da requisição, a API realiza um mapeamento dos dados recebidos, transformando o formato do JSON enviado pelo cliente para o formato armazenado no banco de dados.

🛠 Tecnologias utilizadas

Node.js

Express

MongoDB

Mongoose

Thunder Client (para testes de API)

📂 Estrutura do Projeto
api-orders
│
├── src
│   ├── controllers
│   │   └── orderController.js
│   │
│   ├── models
│   │   └── order.js
│   │
│   └── routes
│       └── orderRoutes.js
│
├── .env
├── .env.example
├── README.md
└── server.js

⚙️ Configuração do ambiente
1️⃣ Clonar o repositório
git clone https://github.com/pedroaugustofs/api-orders.git

Entrar na pasta do projeto:

cd api-orders
2️⃣ Instalar dependências
npm install
3️⃣ Configurar variáveis de ambiente

Crie um arquivo .env baseado no .env.example.

Exemplo:

PORT=3000
MONGO_URI=mongodb://localhost:27017/orders
4️⃣ Iniciar o servidor
node server.js

Se tudo estiver correto aparecerá:

Servidor rodando na porta 3000
📡 Endpoints da API
Criar pedido

POST

http://localhost:3000/order

Body:

{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
Obter pedido por número

GET

http://localhost:3000/order/:orderId

Exemplo:

http://localhost:3000/order/v10089015vdb-01
Listar todos os pedidos (opcional)

GET

http://localhost:3000/order/list
Atualizar pedido (opcional)

PUT

http://localhost:3000/order/:orderId
Deletar pedido (opcional)

DELETE

http://localhost:3000/order/:orderId
🔄 Transformação de dados (Mapping)

A API recebe os dados no seguinte formato:

{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}

Antes de salvar no banco, a API realiza o mapeamento dos campos, convertendo para:

{
  "orderId": "v10089015vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
🧠 Arquitetura utilizada

Foi utilizada uma arquitetura em camadas (MVC):

Model

Responsável pela definição da estrutura dos dados e interação com o banco MongoDB.

Controller

Responsável pela lógica da aplicação e tratamento das requisições.

Routes

Define os endpoints da API e direciona as requisições para os controllers.

Essa separação facilita a organização do código, manutenção e escalabilidade da aplicação.