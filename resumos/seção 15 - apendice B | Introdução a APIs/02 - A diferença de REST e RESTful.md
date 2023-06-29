# A Diferença de REST e RESTful

REST (Representational State Transfer) e RESTful são termos relacionados à arquitetura de sistemas distribuídos e ao design de APIs. Embora sejam frequentemente usados de forma intercambiável, eles têm significados ligeiramente diferentes.

REST é um estilo arquitetural que define um conjunto de princípios e restrições para projetar sistemas distribuídos escaláveis e interoperáveis. Foi proposto por Roy Fielding em sua tese de doutorado, onde descreveu o funcionamento da World Wide Web.

Os princípios do REST incluem:

1. Arquitetura cliente-servidor: Separação clara entre o cliente (quem faz a solicitação) e o servidor (quem fornece o serviço).

2. Estado de transferência representacional: As interações entre cliente e servidor são baseadas na transferência de representações de recursos. Cada recurso possui uma identificação única (URI) e pode ser representado em diferentes formatos, como JSON ou XML.

3. Sem estado (stateless): Cada solicitação do cliente para o servidor contém todas as informações necessárias para que o servidor entenda e processe a solicitação. Não há necessidade de manter o estado da sessão no servidor entre solicitações.

4. Operações padronizadas: O REST utiliza métodos HTTP padrão, como GET, POST, PUT e DELETE, para realizar operações em recursos. Esses métodos são mapeados para ações de leitura, criação, atualização e exclusão de recursos, respectivamente.

Por outro lado, RESTful é um termo usado para descrever uma API que segue os princípios do REST. Uma API RESTful é uma API que adere aos princípios arquiteturais do REST, ou seja, segue as restrições e convenções definidas pelo estilo REST.

Uma API RESTful usa URLs (Uniform Resource Locators) para identificar recursos, utiliza os métodos HTTP corretos para operar nesses recursos e retorna respostas no formato adequado (por exemplo, JSON ou XML) com códigos de status HTTP apropriados.

Em resumo, REST é uma abordagem arquitetural para projetar sistemas distribuídos, enquanto RESTful é uma descrição de uma API que segue os princípios e as restrições do REST. Uma API pode ser considerada RESTful quando segue as diretrizes do REST.

### Os Princípios API REST

No nível mais básico, uma [API](https://www.ibm.com/topics/api "learn_api") é um mecanismo que permite que um aplicativo ou serviço acesse um recurso dentro de outro aplicativo ou serviço. O aplicativo ou serviço que faz o acesso é chamado de cliente, e o aplicativo ou serviço que contém o recurso é chamado de servidor.

Algumas APIs, como SOAP ou XML-RPC, impõem uma estrutura rígida aos desenvolvedores. Mas as APIs REST podem ser desenvolvidas usando praticamente qualquer linguagem de programação e suportam uma variedade de formatos de dados. O único requisito é que eles se alinhem aos seis princípios de design REST a seguir - também conhecidos como restrições de arquitetura:

1. **Uniform interface** . Todas as solicitações de API para o mesmo recurso devem ter a mesma aparência, independentemente da origem da solicitação. A API REST deve garantir que o mesmo dado, como o nome ou endereço de e-mail de um usuário, pertença a apenas um identificador de recurso uniforme (URI). Os recursos não devem ser muito grandes, mas devem conter todas as informações de que o cliente possa precisar.  

2. **Client-server decoupling**. No projeto da API REST, os aplicativos cliente e servidor devem ser completamente independentes um do outro. A única informação que o aplicativo cliente deve saber é o URI do recurso solicitado; ele não pode interagir com o aplicativo do servidor de nenhuma outra maneira. Da mesma forma, um aplicativo de servidor não deve modificar o aplicativo cliente, apenas transmiti-lo aos dados solicitados via HTTP.  

3. **Statelessness** . As APIs REST são sem estado, o que significa que cada solicitação precisa incluir todas as informações necessárias para processá-la. Em outras palavras, as APIs REST não requerem nenhuma sessão do lado do servidor. Os aplicativos de servidor não têm permissão para armazenar nenhum dado relacionado a uma solicitação do cliente.  

4. **Cacheability** . Quando possível, os recursos devem ser armazenados em cache no lado do cliente ou do servidor. As respostas do servidor também precisam conter informações sobre se o armazenamento em cache é permitido para o recurso entregue. O objetivo é melhorar o desempenho do lado do cliente e aumentar a escalabilidade do lado do servidor.  

5. **Layered system architecture** . Nas APIs REST, as chamadas e respostas passam por diferentes camadas. Como regra geral, não assuma que os aplicativos cliente e servidor se conectam diretamente entre si. Pode haver vários intermediários diferentes no loop de comunicação. As APIs REST precisam ser projetadas para que nem o cliente nem o servidor saibam se ele se comunica com o aplicativo final ou com um intermediário.  

6. **Code on demand (optional)** . As APIs REST geralmente enviam recursos estáticos, mas, em certos casos, as respostas também podem conter código executável (como applets Java). Nesses casos, o código só deve ser executado sob demanda.

# Referencias

[What is a REST API? | IBM](https://www.ibm.com/topics/rest-apis)


