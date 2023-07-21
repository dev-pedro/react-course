const express = require('express')

const app = express()
const port = 3000 // Escolha a porta que deseja usar para a sua API

app.use(
  express.urlencoded({
    extended: true
  })
)

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json())

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.status(200).send('Ola a sua primeira API!')
})

// Rota GET para retornar um JSON de exemplo
app.get('/api/exemplo', (req, res) => {
  res.status(200).json({
    message: 'Primeira rota criada com sucesso!',
    info: 'Exemplo de resposta JSON',
    date: new Date()
  })
})

// Rota POST para receber dados na API
app.post('/createproduct', (req, res) => {
  const name = req.body.name
  const price = req.body.price

  if(!name){
    res.status(422).json({message: 'O campo nome é obrigatório.'})
    return
  }

  console.log(name, price)

  res.status(201).json({ message: `O produto ${name} foi criado com sucesso!` })
})
