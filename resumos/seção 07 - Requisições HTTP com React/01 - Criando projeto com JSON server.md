# Criando projeto com JSON server

## Resumo

Criar um projeto com JSON Server é uma ótima maneira de simular um servidor RESTful para desenvolvimento e teste de aplicativos front-end, sem a necessidade de um servidor back-end real. O JSON Server permite que você crie uma API REST completa a partir de um arquivo JSON.

Aqui estão os passos para criar um projeto com JSON Server:

**Passo 1: Instalação**

Certifique-se de que você tenha o Node.js e o npm (gerenciador de pacotes Node.js) instalados em seu sistema. Se você não os tiver, pode baixá-los e instalá-los em https://nodejs.org/.

Em seguida, instale o JSON Server globalmente usando o npm:

```bash
npm install -g json-server
```

**Passo 2: Crie um arquivo JSON**

Crie um arquivo JSON que servirá como seu banco de dados simulado. Por exemplo, você pode criar um arquivo chamado `db.json` com o seguinte conteúdo:

```json
{
  "posts": [
    { "id": 1, "title": "Post 1" },
    { "id": 2, "title": "Post 2" },
    { "id": 3, "title": "Post 3" }
  ],
  "comments": [
    { "id": 1, "body": "Comment 1" },
    { "id": 2, "body": "Comment 2" },
    { "id": 3, "body": "Comment 3" }
  ]
}
```

**Passo 3: Iniciar o JSON Server**

No terminal, navegue até o diretório onde o arquivo `db.json` está localizado e execute o seguinte comando para iniciar o JSON Server:

```bash
json-server --watch db.json
```

Isso iniciará o servidor JSON na porta padrão 3000 (você pode alterar a porta com a opção `--port`). O JSON Server também cria automaticamente endpoints RESTful para as coleções no arquivo `db.json`.

Agora você pode acessar sua API REST simulada em `http://localhost:3000`. Por exemplo, você pode fazer uma solicitação GET para `http://localhost:3000/posts` para obter todos os posts.

Além disso, o JSON Server oferece suporte a várias funcionalidades, como filtragem, paginação e ordenação. Você pode consultar a documentação oficial do JSON Server para saber mais sobre esses recursos: https://github.com/typicode/json-server

Lembre-se de que o JSON Server é uma ferramenta de desenvolvimento e não deve ser usada em produção. É uma maneira conveniente de criar uma API falsa para testar seu aplicativo front-end durante o desenvolvimento.
