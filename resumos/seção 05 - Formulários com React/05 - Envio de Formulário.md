# Envio de Formulário

## Resumo

Para lidar com o envio de um formulário em um componente React, você pode usar o evento `onSubmit` do elemento `<form>` e criar uma função de manipulação (`handleSubmit`) que será chamada quando o formulário for enviado. Aqui está um exemplo básico de como fazer isso:

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que a página seja recarregada quando o formulário for enviado

    // Faça alguma ação com os dados do formulário
    console.log('Nome:', nome);
    console.log('Email:', email);

    // Limpe os campos de entrada
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

Neste exemplo:

- Usamos o evento `onSubmit` do elemento `<form>` para chamar a função `handleSubmit` quando o formulário é enviado.

- Dentro da função `handleSubmit`, usamos `event.preventDefault()` para evitar que a página seja recarregada quando o formulário é enviado.

- Em seguida, você pode realizar qualquer ação necessária com os dados do formulário. No exemplo, estamos apenas imprimindo os valores dos campos de nome e email no console.

- Após lidar com os dados do formulário, você pode redefinir os campos de entrada, definindo seus estados para vazios (`''`) para preparar o formulário para a próxima entrada.

- Cada campo de entrada é vinculado ao seu respectivo estado (por exemplo, `nome` e `email`) e possui um evento `onChange` para atualizar o estado à medida que o usuário digita.

- O botão "Enviar" no final do formulário dispara a ação de envio quando clicado.

Lembre-se de que este é apenas um exemplo básico de manipulação de envio de formulário em React. Em uma aplicação real, você pode enviar os dados do formulário para um servidor ou realizar outras ações, dependendo dos requisitos do seu projeto.
