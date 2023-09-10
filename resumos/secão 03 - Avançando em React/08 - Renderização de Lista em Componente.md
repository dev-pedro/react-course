# Renderização de Lista em Componente

## Resumo

A renderização de uma lista em um componente React é uma tarefa comum e útil. Isso permite que você exiba uma coleção de elementos de maneira dinâmica em sua interface de usuário. Para renderizar uma lista em um componente React, você pode usar o método `map()` para mapear os elementos da lista para elementos JSX. Aqui está um exemplo simples:

Suponha que você tenha um array de itens que deseja renderizar em um componente de lista:

```jsx
import React from 'react';

function ListaDeItens({ itens }) {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaDeItens;
```

Neste exemplo:

1. Importamos o React.

2. Criamos um componente funcional chamado `ListaDeItens` que recebe um array de itens como propriedade `itens`.

3. Usamos o método `map()` para iterar sobre o array de itens. Para cada item, criamos um elemento `<li>` e usamos o índice como a chave (`key`). A chave ajuda o React a identificar cada elemento de forma única.

4. Renderizamos os elementos `<li>` dentro de uma lista não ordenada `<ul>`.

Agora, você pode usar esse componente `ListaDeItens` em seu aplicativo, passando um array de itens como propriedade:

```jsx
import React from 'react';
import ListaDeItens from './ListaDeItens';

function App() {
  const itens = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h1>Minha Lista</h1>
      <ListaDeItens itens={itens} />
    </div>
  );
}

export default App;
```

Dessa forma, o componente `ListaDeItens` renderizará a lista de itens em sua interface de usuário.

Lembre-se de que a chave (`key`) é importante para garantir um desempenho eficiente e uma renderização adequada quando se trata de listas em React. Certifique-se de que a chave seja exclusiva para cada item na lista.
