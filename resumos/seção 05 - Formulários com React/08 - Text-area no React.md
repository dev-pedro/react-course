# <textarea> no React

## Resumo

Para criar um elemento `<textarea>` em um componente React, você pode usar a tag `<textarea>` da mesma maneira que faria com um elemento de entrada `<input>`. A diferença principal é que você pode inserir conteúdo dentro do elemento `<textarea>`, que será o valor inicial do campo de texto.

Aqui está um exemplo de como criar um `<textarea>` em um componente React:

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [mensagem, setMensagem] = useState('');

  const handleInputChange = (event) => {
    setMensagem(event.target.value);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={mensagem}
        onChange={handleInputChange}
        placeholder="Digite sua mensagem"
      />
      <p>Mensagem digitada: {mensagem}</p>
    </div>
  );
}

export default Formulario;
```

Neste exemplo:

- Usamos a tag `<textarea>` para criar um campo de texto de várias linhas.

- Definimos os atributos `rows` e `cols` para especificar o número de linhas e colunas do `<textarea>`. Esses valores podem ser ajustados conforme necessário.

- Vinculamos o valor do `<textarea>` ao estado `mensagem` usando o atributo `value`.

- Implementamos um manipulador de evento `onChange` chamado `handleInputChange`, que é acionado sempre que o usuário digita no `<textarea>`. O manipulador atualiza o estado `mensagem` com o novo valor do campo de texto.

- O valor do estado `mensagem` é exibido abaixo do `<textarea>` para que o usuário possa ver o que foi digitado.

Este é um exemplo básico de como criar e controlar um campo de texto `<textarea>` em um componente React. Você pode personalizar o `<textarea>` com outros atributos e estilos conforme necessário para atender aos requisitos do seu aplicativo.
