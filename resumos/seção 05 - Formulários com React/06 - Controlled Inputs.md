# Controlled Inputs

## Resumo

.

"Controlled inputs" (entradas controladas) é um conceito importante em React quando se trata de formulários e elementos de entrada. Isso se refere a prática de vincular o valor de um elemento de entrada (como um `<input>`) ao estado de um componente React e controlar esse valor por meio desse estado. O React se torna a fonte única da verdade para o valor do elemento de entrada.

Aqui está como funciona uma entrada controlada:

1. **Defina um estado para o valor do elemento de entrada**: Use `useState` (em componentes funcionais) ou `this.state` (em componentes de classe) para definir um estado que represente o valor do elemento de entrada.

2. **Vincule o valor do estado ao elemento de entrada**: Atribua o valor do estado como o valor do elemento de entrada usando o atributo `value`. Isso sincroniza o valor do elemento de entrada com o estado do componente.

3. **Manipule eventos de mudança para atualizar o estado**: Crie um manipulador de evento, geralmente `onChange`, que atualiza o estado com o novo valor toda vez que o usuário interage com o elemento de entrada.

4. **O estado controla o valor**: O React agora é responsável por controlar o valor do elemento de entrada. Quando o estado muda, o valor do elemento de entrada é atualizado, e vice-versa.

Aqui está um exemplo de uma entrada de texto controlada em um componente funcional:

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [texto, setTexto] = useState('');

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={handleInputChange}
      />
      <p>Texto digitado: {texto}</p>
    </div>
  );
}

export default Formulario;
```

Neste exemplo, o estado `texto` controla o valor do campo de entrada. O valor do campo é exibido na tela e atualizado sempre que o usuário digita, graças ao manipulador de evento `onChange`.

O uso de entradas controladas é importante para garantir que o React tenha controle total sobre os elementos de entrada e que a renderização seja sempre consistente com o estado interno do componente. Além disso, isso permite a validação de entrada e o tratamento de formulários de maneira mais eficaz em aplicativos React.

## Preenchendo o Formulário com os Dados Default

Para preencher um formulário com dados padrão passados por meio de props, você pode definir o valor inicial do estado do componente com esses dados quando o componente é montado. Aqui está um exemplo de como fazer isso em um componente funcional:

```jsx
import React, { useState } from 'react';

function Formulario({ user }) {
  // Inicialize o estado com os dados padrão do usuário passados por props
  const [userData, setUserData] = useState({
    nome: user.nome || '',
    email: user.email || '',
    // Outros campos do formulário
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Atualize o estado apenas do campo que está sendo alterado
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Faça algo com os dados do formulário
    console.log('Dados do formulário submetidos:', userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={userData.nome}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      {/* Outros campos do formulário */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

Neste exemplo:

1. Inicializamos o estado `userData` com os dados padrão do usuário passados por meio das props `user`. Isso ocorre no momento da renderização inicial.

2. Usamos a função `useState` para criar um estado chamado `userData` que contém todos os campos do formulário que desejamos controlar.

3. Vinculamos o valor de cada campo do formulário ao seu respectivo campo em `userData`. Isso garante que os campos do formulário sejam preenchidos com os dados padrão.

4. Quando o usuário altera qualquer campo do formulário, o manipulador de eventos `handleInputChange` é chamado, atualizando o estado `userData` apenas para o campo que está sendo alterado.

5. Quando o formulário é enviado, os dados são coletados do estado `userData` e podem ser usados de acordo com a lógica do aplicativo.

Dessa forma, você pode preencher um formulário com dados padrão passados por props e permitir que o usuário os atualize conforme necessário.
