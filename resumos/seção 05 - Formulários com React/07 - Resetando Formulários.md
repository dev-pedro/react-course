# Resetando Formulários

## Resumo

Para redefinir um formulário em React após um envio bem-sucedido ou ação de reset, você pode usar duas abordagens principais: uma delas é utilizando o método `reset` de um formulário HTML e a outra é redefinindo os estados para seus valores iniciais. Aqui estão ambas as abordagens:

### 1. Usando o método `reset` do formulário HTML:

Você pode usar o método `reset()` de um elemento `<form>` HTML para redefinir todos os campos de entrada do formulário para seus valores iniciais. Para isso, você precisa de uma referência para o elemento `<form>` no seu componente. Aqui está um exemplo:

```jsx
import React, { useState, useRef } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realize ações com os dados do formulário

    // Redefina o formulário
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

Neste exemplo, criamos uma referência usando `useRef` chamada `formRef` e a associamos ao elemento `<form>`. Quando o formulário é enviado com sucesso, chamamos `formRef.current.reset()` para redefinir todos os campos de entrada para seus valores iniciais.

### 2. Redefinindo os estados para valores iniciais:

Outra abordagem é redefinir manualmente os estados para seus valores iniciais após o envio do formulário. Aqui está um exemplo:

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realize ações com os dados do formulário

    // Redefina os estados para valores iniciais
    setNome('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

Neste exemplo, após o envio bem-sucedido do formulário, redefinimos manualmente os estados `nome` e `email` para seus valores iniciais (nesse caso, `''` para ambos). Isso limpa os campos de entrada e os reconfigura para o estado inicial.

Escolha a abordagem que melhor se adequá às necessidades do seu aplicativo e às conveniências do seu código. Ambas as abordagens são válidas e funcionam bem.


