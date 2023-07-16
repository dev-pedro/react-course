/* 

const express = require('express')

const app = express()
const port = 3002   

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });

app.get('/', (req, res)=> {
    res.json({message: 'Primeira rota criada com sucesso!'})
})
 
 */

  
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
app.get('/', (req, res) => {
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

