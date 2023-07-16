# Criando a Primeira API

### Resumo

Criar uma API com o Express.js no Node.js é uma tarefa relativamente simples e eficiente. O Express.js é um framework web minimalista e flexível para o Node.js, que permite criar facilmente aplicativos e APIs RESTful. Para começar, certifique-se de ter o Node.js instalado em sua máquina. Se não tiver, você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

A seguir, vou orientá-lo passo a passo na criação de uma API básica usando o Express.js:

Passo 1: Configuração do projeto
Crie uma nova pasta para o projeto e inicie um novo projeto Node.js executando o seguinte comando no terminal:

```bash
npm init -y
```

Passo 2: Instalação do Express.js com `nodemon`
Agora, instale o Express.js no seu projeto usando o npm (Node Package Manager):

```bash
npm install express nodemon
```

O nodemon é uma ferramenta muito útil durante o desenvolvimento no Node.js, pois permite que o servidor seja reiniciado automaticamente sempre que houver alterações nos arquivos do projeto. Isso evita a necessidade de reiniciar manualmente o servidor a cada mudança, agilizando o processo de desenvolvimento.

No arquivo `package.json` do seu projeto, adicione um novo script chamado "start" que utilizará o nodemon para iniciar a aplicação. O seu arquivo `package.json` deve ficar assim:

```json5
{
  "name": "nome-do-seu-projeto",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon ./index.js localhost 3000"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```



Passo 3: Criando o servidor Express.js
Crie um arquivo chamado `index.js` (ou qualquer outro nome de sua preferência) na raiz do seu projeto. Esse arquivo será o ponto de entrada para o servidor da sua API. Abra-o e adicione o seguinte código:

```javascript
const express = require('express');
const app = express();
const port = 3000; // Escolha a porta que deseja usar para a sua API

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à sua API!');
});

// Rota para retornar um JSON de exemplo
app.get('/api/exemplo', (req, res) => {
  const data = {
    message: 'Exemplo de resposta JSON',
    date: new Date(),
  };
  res.json(data);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

Passo 4: Executando a API
Agora que o código do servidor foi criado, você pode iniciar a API executando o seguinte comando no terminal, dentro da pasta do projeto:

```bash
npm start
```

Se tudo ocorreu corretamente, você deverá ver a mensagem "Servidor rodando em [http://localhost:3000](http://localhost:3000/)" no console. Isso indica que o servidor está ativo e pronto para receber solicitações.

Passo 5: Testando a API
Você pode testar sua API usando ferramentas como o Postman ou o curl no terminal. Por exemplo, ao enviar uma solicitação GET para "http://localhost:3000/api/exemplo", você receberá uma resposta JSON de exemplo.

Agora você tem uma API básica em execução com o Express.js! A partir daqui, você pode expandir e adicionar mais rotas, interagir com bancos de dados, autenticar usuários e muito mais, dependendo das necessidades do seu projeto.


