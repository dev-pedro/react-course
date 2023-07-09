# Comandos Git

### Comandos Mais Comuns

 `git init`:

- Exemplo: Para inicializar um novo repositório Git em um diretório vazio, você pode executar o seguinte comando:
  
  ```bash
  git init
  ```

`git status`:

- Exemplo: Para verificar o status do repositório e ver as alterações pendentes, você pode executar o seguinte comando:
  
  ```bash
  git status
  ```

`git add`:

- Exemplo: Para adicionar um arquivo chamado "arquivo.txt" ao índice do Git, você pode executar o seguinte comando:
  
  ```bash
  git add arquivo.txt
  ```
* No comando `git add`, se o arquivo estiver dentro de pastas, você pode especificar o caminho completo do arquivo em relação ao diretório raiz do repositório. Por exemplo, suponha que você tenha a seguinte estrutura de pastas no seu repositório:
  
  ```bash
  └── projeto
      ├── src
      │   ├── main
      │   │   └── arquivo.txt
      │   └── test
      │       └── teste.txt
      └── README.md
  ```

* Se você quiser adicionar o arquivo "arquivo.txt" ao índice, que está dentro da pasta "src/main", você pode usar o seguinte comando:
  
  ```bash
  git add src/main/arquivo.txt
  ```

* Da mesma forma, se você quiser adicionar o arquivo "teste.txt" ao índice, que está dentro da pasta "src/test", você pode usar o seguinte comando:
  
  ```bash
  git add src/test/teste.txt
  ```

Dessa forma, você pode adicionar arquivos que estão dentro de pastas específicas ao índice do Git usando o caminho completo do arquivo em relação ao diretório raiz do repositório.

`git commit`:

- Exemplo: Para criar um novo commit com as alterações adicionadas ao índice e adicionar uma mensagem descritiva, você pode executar o seguinte comando:
  
  ```bash
  git commit -m "Mensagem do commit"
  ```

`git log`:

- Exemplo: Para visualizar o histórico de commits detalhado, você pode executar o seguinte comando:
  
  ```bash
  git log
  ```

`git branch`:

- Exemplo: Para listar todos os ramos disponíveis no repositório, você pode executar o seguinte comando:
  
  ```bash
  git branch
  ```
* Exemplo: Para criar um novo ramo chamado "novo-ramo", você pode executar o seguinte comando:
  
  ```bash
  git branch novo-ramo
  ```

* Exemplo: Para excluir um ramo chamado "ramo-antigo", você pode executar o seguinte comando:
  
  ```bash
  git branch -d ramo-antigo
  ```

`git checkout`:

- Exemplo: Para mudar para um ramo específico, como "nome-do-ramo", você pode executar o seguinte comando:
  
  ```bash
  git checkout nome-do-ramo
  ```
* Exemplo: Para descartar as alterações não confirmadas em um arquivo chamado "arquivo.txt" e restaurá-lo para a versão mais recente confirmada, você pode executar o seguinte comando:
  
  ```bash
  git checkout -- arquivo.txt
  ```

`git merge`:

- Exemplo: Suponha que você esteja no ramo "ramo1" e queira mesclar as alterações do "ramo2" nele. Você pode executar o seguinte comando:
  
  ```bash
  git merge ramo2
  ```

`git remote`:

- Exemplo: Para adicionar um repositório remoto chamado "origin" com a URL especificada, você pode executar o seguinte comando:
  
  ```bash
  git remote add origin <url>
  ```

`git push`:

- Exemplo: Para enviar as alterações do ramo local para o repositório remoto especificado, você pode executar o seguinte comando:
  
  ```bash
  git push origin <branch>
  ```

`git pull`:

- Exemplo: Para buscar as alterações do repositório remoto e mesclá-las com o ramo local especificado, você pode executar o seguinte comando:
  
  ```bash
  git pull origin <branch>
  ```

`git clone`:

- Exemplo: Para clonar um repositório remoto para o seu ambiente local, você pode executar o seguinte comando:
  
  ```bash
  git clone <url>
  ```

`git diff`:

- Exemplo: Para mostrar as diferenças entre dois commits específicos, você pode executar o seguinte comando:
  
  ```bash
  git diff <commitA> <commitB>
  ```

`.gitignore`:

- Exemplo: Dentro do arquivo `.gitignore`, você pode adicionar a seguinte linha para ignorar todos os arquivos com a extensão `.log`:
  
  ```bash
  *.log
  ```

`git reset`:

- Exemplo: Para remover um arquivo chamado "arquivo.txt" do índice, mantendo as alterações no diretório de trabalho, você pode executar o seguinte comando:
  
  ```bash
  git reset HEAD arquivo.txt
  ```

`git stash`:

- Exemplo: Para salvar as alterações atuais em uma área de armazenamento temporário, você pode executar o seguinte comando:
  
  ```bash
  git stash
  ```

`git rebase`:

- Exemplo: Para aplicar os commits do ramo atual sobre o topo do ramo especificado, você pode executar o seguinte comando:
  
  ```bash
  git rebase <branch>
  ```

Esses exemplos ilustram como usar os comandos e tópicos adicionais que mencionei na linha de comando do Git. Lembre-se de ajustar os argumentos e os valores conforme necessário para o seu caso de uso.

### Um Passo a Passo

Para garantir que suas alterações locais sejam enviadas para um repositório remoto (origin), você pode seguir este passo a passo:

1. Verifique o status do seu repositório local:
   
   - Execute o comando `git status` para verificar se existem alterações pendentes ou arquivos modificados que precisam ser confirmados.

2. Adicione as alterações ao índice:
   
   - Utilize o comando `git add` para adicionar as alterações aos arquivos que você deseja enviar para o repositório remoto. Por exemplo, `git add arquivo.txt` adiciona o arquivo "arquivo.txt" ao índice.

3. Confirme as alterações:
   
   - Execute o comando `git commit -m "Mensagem do commit"` para criar um novo commit com as alterações adicionadas ao índice. Certifique-se de fornecer uma mensagem descritiva que resuma as alterações feitas.

4. Verifique se há alterações no repositório remoto:
   
   - Antes de enviar suas alterações para o repositório remoto, é uma boa prática verificar se houve alterações nesse repositório. Utilize o comando `git pull origin <branch>` para buscar as alterações mais recentes.

5. Envie as alterações para o repositório remoto:
   
   - Use o comando `git push origin <branch>` para enviar as alterações do seu ramo local para o repositório remoto especificado pela origem (origin). Por exemplo, `git push origin main` envia as alterações do ramo "main" para o repositório remoto.

6. Verifique se as alterações foram enviadas com sucesso:
   
   - Após o push, você pode verificar se as alterações foram enviadas corretamente ao repositório remoto, visitando a interface do repositório em um serviço como o GitHub, GitLab ou Bitbucket.

Este passo a passo garantirá que suas alterações locais sejam enviadas para o repositório remoto (origin) e estarão disponíveis para colaboradores ou para acesso posterior. Certifique-se de substituir `<branch>` pelo nome correto do ramo que você está usando, como "main" ou "master".
