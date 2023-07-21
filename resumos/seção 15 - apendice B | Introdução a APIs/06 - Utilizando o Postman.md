# Utilizando o Postman

### Resumo

### O que é o Postman?

O Postman é uma ferramenta popular de colaboração e desenvolvimento de API (Interface de Programação de Aplicativos). Ele oferece um ambiente de trabalho completo para que desenvolvedores possam criar, testar, depurar e documentar APIs de maneira eficiente.

Principais recursos do Postman:

1. Teste de API: O Postman permite que você envie solicitações HTTP para APIs e visualize as respostas em diferentes formatos (JSON, XML, HTML, entre outros). Isso permite que você teste suas APIs antes de integrá-las em aplicativos reais.

2. Coleções: Você pode organizar suas solicitações em coleções, facilitando a gestão e execução de diferentes cenários de teste ou fluxos de trabalho.

3. Ambientes: O Postman permite definir ambientes, que são conjuntos de variáveis de ambiente que podem ser usadas para personalizar suas solicitações em diferentes contextos (por exemplo, desenvolvimento, produção, staging).

4. Autenticação: O Postman suporta vários tipos de autenticação, como Basic Auth, OAuth, Bearer Token, entre outros, para testar APIs que requerem autenticação.

5. Visualização de resposta: Ele oferece uma interface amigável para visualizar os dados retornados pelas APIs, tornando mais fácil entender e depurar as respostas.

6. Documentação: Com o Postman, você pode criar documentação interativa para suas APIs, permitindo que outros desenvolvedores entendam como usar suas APIs com facilidade.

7. Testes automatizados: O Postman permite que você escreva scripts de teste automatizados para verificar se as respostas das APIs atendem aos critérios de sucesso esperados.

8. Colaboração: O Postman suporta recursos de colaboração, permitindo que equipes trabalhem juntas em projetos de API, compartilhando coleções, ambientes e documentação.

O Postman é amplamente utilizado por desenvolvedores e equipes de desenvolvimento de software para facilitar o desenvolvimento e teste de APIs. Seja para testar APIs internas, consumir APIs públicas ou desenvolver sua própria API, o Postman é uma ferramenta poderosa e versátil.

### Testando Rotas

Testar rotas com o Postman é uma tarefa bastante simples e eficiente. O Postman permite enviar solicitações HTTP para as rotas da sua API e visualizar as respostas retornadas pelos servidores. Para fazer isso, siga os passos abaixo:

1. Abra o Postman: Se você ainda não tem o Postman instalado, você pode baixá-lo gratuitamente em [Asset 2](https://www.postman.com/downloads/).

2. Crie uma nova solicitação: Clique no botão "New" para criar uma nova solicitação. Em seguida, insira um nome para sua solicitação e escolha o método HTTP adequado (GET, POST, PUT, PATCH, DELETE, etc.) que corresponde à rota que deseja testar.

3. Insira a URL: No campo de URL, insira a URL completa da rota que você deseja testar. Certifique-se de incluir todos os parâmetros e caminhos necessários, se houver.

4. Configurar cabeçalhos (opcional): Se a sua API requer autenticação ou outros cabeçalhos personalizados, você pode configurá-los clicando na guia "Headers" e adicionando os cabeçalhos relevantes.

5. Configurar o corpo da solicitação (opcional): Se você estiver usando os métodos POST, PUT ou PATCH e sua rota exige o envio de dados no corpo da solicitação, você pode configurá-los na guia "Body".

6. Enviar a solicitação: Clique no botão "Send" para enviar a solicitação para a rota definida. O Postman enviará a solicitação para o servidor e exibirá a resposta recebida.

7. Ver a resposta: Após enviar a solicitação, a resposta do servidor será exibida na área de resposta do Postman. Você poderá ver o status da resposta (por exemplo, 200 OK, 404 Not Found, etc.), o corpo da resposta (normalmente em formato JSON, XML ou texto) e outros detalhes relevantes.

8. Testar cenários diferentes: Se você quiser testar cenários diferentes, como passar parâmetros diferentes, usar métodos diferentes ou alterar cabeçalhos, basta configurar a solicitação conforme necessário e enviá-la novamente.

Esses são os passos básicos para testar rotas com o Postman. Ele também oferece recursos avançados, como scripts de teste automatizados, gerenciamento de coleções e ambientes, entre outros, que podem ajudar a tornar o processo de teste ainda mais eficiente e produtivo.

### Criando Método Post

Para criar um método POST em um backend, você precisará de um servidor ou framework que suporte a criação de rotas e manipulação de solicitações HTTP. Vou fornecer um exemplo básico de como criar um método POST usando o Node.js e o framework Express, que é uma das opções mais populares para criar APIs no backend.

Defina uma rota POST para o endpoint que você deseja criar. Por exemplo, se você quiser criar um endpoint para criar um novo usuário:

```javascript
app.post('/api/users', (req, res) => {
  // Aqui você pode processar os dados enviados no corpo da solicitação
  // e criar um novo usuário no seu banco de dados ou fazer outras operações.

  // Exemplo: recebendo um nome e retornando uma mensagem de sucesso
  const { name } = req.body;
  res.json({ message: `Usuário ${name} criado com sucesso!` });
});
```

Inicie o servidor e escute por solicitações na porta desejada:

```javascript
const PORT = 3000; // Você pode usar outra porta se preferir
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

Certifique-se de incluir o middleware `express.json()` antes de definir suas rotas para que o Express possa interpretar o corpo da solicitação JSON:

```javascript
app.use(express.json());
```

Agora você está pronto para executar o servidor:

```bash
npm start
```

Seu servidor estará rodando e ouvindo em `http://localhost:3000` (ou na porta que você definiu). Agora, quando você enviar uma solicitação POST para `http://localhost:3000/api/users`, ele executará o código no callback e retornará a resposta.

Lembre-se de que este é apenas um exemplo básico e existem muitas outras considerações ao criar um método POST em um aplicativo real, como autenticação, validação de dados, armazenamento em banco de dados, entre outros. Dependendo das suas necessidades, você pode precisar integrar outros módulos e funcionalidades para criar um backend robusto e seguro.

### Status da Respostas HTTP

Em uma resposta HTTP, o "status da resposta" refere-se a um código numérico de três dígitos que indica o resultado da solicitação feita pelo cliente ao servidor. Esses códigos são padronizados e fornecem informações sobre o sucesso, falha ou status da operação realizada no servidor.

O status da resposta é incluído na primeira linha da resposta HTTP, após o protocolo HTTP/1.1 e antes da mensagem de status. O formato geral do status da resposta é:

```markdown
HTTP/1.1 [Código do Status] [Mensagem do Status]
```

Exemplos de códigos de status comuns incluem:

- 200 OK: Indica que a solicitação foi bem-sucedida e a resposta contém os dados solicitados. É usado para respostas bem-sucedidas para solicitações GET, POST, PUT e PATCH.

- 201 Created: Indica que a solicitação de criação de um novo recurso foi bem-sucedida e o recurso foi criado com sucesso. É usado para respostas bem-sucedidas para solicitações POST que criam um novo recurso.

- 204 No Content: Indica que a solicitação foi bem-sucedida, mas não há conteúdo para retornar na resposta. É frequentemente usado para respostas bem-sucedidas para solicitações DELETE.

- 400 Bad Request: Indica que a solicitação do cliente foi malformada ou não pôde ser entendida pelo servidor.

- 401 Unauthorized: Indica que o cliente não possui autorização para acessar o recurso solicitado. É comumente usado quando as credenciais de autenticação são inválidas ou ausentes.

- 403 Forbidden: Indica que o cliente não tem permissão para acessar o recurso, independentemente de fornecer credenciais de autenticação.

- 404 Not Found: Indica que o recurso solicitado não foi encontrado no servidor.

- 500 Internal Server Error: Indica que ocorreu um erro interno no servidor que impediu a conclusão da solicitação.

Esses são apenas alguns dos códigos de status HTTP mais comuns. Existem muitos outros códigos que fornecem informações adicionais sobre o status da resposta e ajudam na depuração de solicitações e respostas HTTP. Ao lidar com APIs ou criar aplicativos web, é importante entender e interpretar corretamente os códigos de status da resposta para garantir a funcionalidade adequada e a experiência do usuário.

### Códigos de status de respostas HTTP

Os códigos de *status* das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída. As respostas são agrupadas em cinco classes:

1. Respostas de informação (`100`-`199`),
2. Respostas de sucesso (`200`-`299`),
3. Redirecionamentos (`300`-`399`)
4. Erros do cliente (`400`-`499`)
5. Erros do servidor (`500`-`599`).

[Códigos de status de respostas HTTP - HTTP | MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

# Códigos Usados

```javascript
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
```


