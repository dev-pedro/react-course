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

app.get('/', (req, res)=>{
    res.send('Ola a sua primeira API!')
})

// Rota para retornar um JSON de exemplo
app.get('/api/exemplo', (req, res) => {
  res.json({
    message: 'Primeira rota criada com sucesso!',
    info: 'Exemplo de resposta JSON',
    date: new Date()
  })
})
