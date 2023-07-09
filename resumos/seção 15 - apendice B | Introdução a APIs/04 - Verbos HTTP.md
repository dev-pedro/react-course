# Verbos HTTP

### Verbos Mais Comuns

Os verbos HTTP são os métodos utilizados em solicitações e respostas HTTP para indicar a ação que deve ser realizada em um recurso específico. Os verbos HTTP mais comuns são os seguintes: 

1. GET: O verbo GET é usado para solicitar um recurso específico do servidor. Ao fazer uma solicitação GET, você está pedindo ao servidor para enviar uma representação do recurso solicitado de volta para você. Geralmente, essa é uma operação de leitura, onde você obtém informações do servidor sem fazer alterações nele. Por exemplo, ao abrir um site em um navegador, uma solicitação GET é enviada para obter a página HTML correspondente.

2. POST: O verbo POST é usado para enviar dados ao servidor para serem processados. Normalmente, você usa o POST para criar novos recursos no servidor ou enviar dados que serão processados e armazenados. Por exemplo, ao preencher um formulário em um site e enviá-lo, o navegador envia uma solicitação POST ao servidor com os dados fornecidos no formulário.

3. PUT: O verbo PUT é usado para enviar dados ao servidor para serem armazenados em um recurso específico. Em outras palavras, você está atualizando completamente um recurso existente com os dados fornecidos. Por exemplo, se você estiver construindo uma API para gerenciar produtos, poderia usar o verbo PUT para enviar os dados atualizados de um produto específico e substituir todos os seus atributos no servidor.

4. PATCH: O verbo PATCH também é usado para enviar dados ao servidor para serem aplicados a um recurso específico. No entanto, o PATCH é usado para atualizar parcialmente um recurso existente, em vez de substituí-lo completamente. Em vez de enviar todos os atributos do recurso, você envia apenas os dados que deseja atualizar. Por exemplo, se você quiser apenas alterar o nome de um produto, pode usar o verbo PATCH para enviar somente o novo nome.

5. DELETE: O verbo DELETE é usado para solicitar a exclusão de um recurso específico no servidor. Ao enviar uma solicitação DELETE, você está solicitando ao servidor que remova permanentemente o recurso especificado. Por exemplo, ao clicar no botão "Excluir" em um aplicativo de gerenciamento de tarefas, uma solicitação DELETE é enviada para remover a tarefa selecionada do servidor.

Esses verbos HTTP desempenham um papel crucial na interação entre clientes e servidores na web, permitindo uma ampla gama de operações e manipulações de recursos.

### A Diferença Entre o PUT e o PATCH ?

A diferença entre os verbos PUT e PATCH está relacionada à forma como os dados são enviados para atualizar um recurso existente:

PUT (Atualização completa):

- O verbo PUT é utilizado quando você deseja atualizar completamente um recurso existente no servidor.
- Ao enviar uma solicitação PUT, você envia todos os dados do recurso, substituindo completamente suas informações no servidor.
- Isso significa que, se você omitir um campo ao enviar a solicitação PUT, o servidor considerará que esse campo deve ser definido como vazio ou nulo.
- O servidor trata a solicitação PUT como uma instrução para substituir completamente o recurso pelo novo estado fornecido.
- É necessário fornecer todos os dados do recurso no corpo da solicitação PUT.

PATCH (Atualização parcial):

- O verbo PATCH é utilizado quando você deseja atualizar parcialmente um recurso existente no servidor, modificando apenas alguns campos ou atributos específicos.
- Ao enviar uma solicitação PATCH, você envia apenas os dados que deseja atualizar, sem a necessidade de enviar todos os campos do recurso.
- Isso permite uma atualização mais granular, alterando apenas as partes específicas do recurso que foram incluídas na solicitação PATCH.
- O servidor trata a solicitação PATCH como uma instrução para aplicar as alterações fornecidas aos campos especificados, sem afetar os campos não incluídos na solicitação.
- É possível fornecer apenas os dados que precisam ser alterados no corpo da solicitação PATCH, sem afetar os demais campos do recurso.

Em resumo, o PUT é usado para substituir completamente um recurso existente, enquanto o PATCH é usado para fazer alterações parciais em um recurso, mantendo os campos não incluídos na solicitação intactos. A escolha entre PUT e PATCH depende do tipo de atualização que você deseja realizar e da estrutura de dados que está sendo manipulada.

### O Termo CRUD ?

O termo CRUD é um acrônimo que representa as quatro principais operações básicas que podem ser realizadas em um sistema ou aplicação que lida com dados persistentes. Cada letra do acrônimo corresponde a uma dessas operações:

1. Create (C): Representa a operação de criação. Essa operação envolve a criação de um novo registro ou objeto no sistema. Por exemplo, ao criar uma nova entrada em um banco de dados ou ao adicionar um novo usuário a um sistema, você está realizando a operação de criação.

2. Read (R): Representa a operação de leitura. Essa operação envolve a recuperação ou obtenção de dados existentes do sistema. Por exemplo, ao realizar uma consulta em um banco de dados para obter informações sobre um determinado cliente, você está realizando a operação de leitura.

3. Update (U): Representa a operação de atualização. Essa operação envolve a modificação de dados existentes no sistema. Por exemplo, ao atualizar as informações de contato de um cliente em um sistema, você está realizando a operação de atualização.

4. Delete (D): Representa a operação de exclusão. Essa operação envolve a remoção de dados existentes do sistema. Por exemplo, ao remover um registro de um banco de dados ou excluir um usuário de um sistema, você está realizando a operação de exclusão.

O CRUD abrange as operações básicas necessárias para a manipulação de dados em um sistema. Muitas aplicações e frameworks adotam esse conceito para fornecer funcionalidades de manipulação de dados de forma simples e consistente.
