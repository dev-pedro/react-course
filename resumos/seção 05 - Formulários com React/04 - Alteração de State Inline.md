# Alteração de State Inline

## Resumo

O código abaixo é uma maneira válida de atualizar o estado `email` inline usando uma função de set inline dentro do manipulador de evento `onChange`. Certifique-se de que você já declarou o estado `email` usando a função `useState` em algum lugar no seu componente antes de usar esse código. Aqui está um exemplo completo:

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [email, setEmail] = useState(''); // Declaração do estado 'email'

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        value={email} // Vincula o valor do campo de entrada ao estado 'email'
        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email' inline
      />
      <p>E-mail digitado: {email}</p> {/* Mostra o valor do estado 'email' */}
    </div>
  );
}

export default Formulario;
```

Neste exemplo:

- Declaramos o estado `email` usando a função `useState`. Inicialmente, ele é definido como uma string vazia.

- Vinculamos o valor do campo de entrada (`<input>`) ao estado `email` usando o atributo `value`.

- No atributo `onChange` do campo de entrada, usamos uma função inline para atualizar o estado `email` com o valor do campo de entrada (`e.target.value`) sempre que o usuário digitar no campo de email.

- O valor do estado `email` é exibido abaixo do campo de entrada para que o usuário possa ver o que foi digitado.

Com esse código, o estado `email` será atualizado conforme o usuário digitar no campo de email, e o valor digitado será refletido no campo de entrada e exibido na página. Certifique-se de que o componente tenha importado a função `useState` e esteja declarando o estado `email` corretamente.


