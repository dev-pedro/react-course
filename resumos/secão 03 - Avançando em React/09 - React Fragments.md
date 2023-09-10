# React Fragments

## Resumo

React Fragments (ou fragmentos) são uma característica do React que permitem que você agrupe vários elementos JSX sem a necessidade de criar um elemento pai extra. Em vez de envolver seus elementos em uma div ou qualquer outro elemento de contêiner, você pode usar um fragmento para evitar a criação de nós desnecessários no DOM. Isso é útil quando você deseja manter uma estrutura de árvore mais limpa e evitar elementos HTML adicionais indesejados.

Para usar React Fragments, você pode usar a sintaxe de abertura e fechamento vazios `<>` e `</>`, ou você pode usar a sintaxe alternativa `<React.Fragment>` e `</React.Fragment>`. Aqui está um exemplo:

Usando a sintaxe de fragmento curto `<>`:

```jsx
import React from 'react';

function ComponenteComFragment() {
  return (
    <>
      <h1>Título do Componente</h1>
      <p>Este é um parágrafo dentro do componente.</p>
    </>
  );
}
```

Usando a sintaxe de fragmento completa `<React.Fragment>`:

```jsx
import React from 'react';

function ComponenteComFragment() {
  return (
    <React.Fragment>
      <h1>Título do Componente</h1>
      <p>Este é um parágrafo dentro do componente.</p>
    </React.Fragment>
  );
}
```

Os React Fragments não criam nenhum elemento HTML extra no DOM. Eles são especialmente úteis quando você precisa retornar vários elementos adjacentes de uma função de componente sem um contêiner extra.

Por exemplo, ao mapear uma lista de itens em um componente e renderizá-los dentro de um fragmento:

```jsx
import React from 'react';

function ListaDeItens({ itens }) {
  return (
    <ul>
      {itens.map((item, index) => (
        <React.Fragment key={index}>
          <li>{item}</li>
          <hr /> {/* Separador */}
        </React.Fragment>
      ))}
    </ul>
  );
}
```

Neste exemplo, cada item da lista é renderizado dentro de um fragmento, o que permite que você inclua o `<li>` e um `<hr />` como elementos irmãos sem criar um elemento de contêiner adicional no DOM.

React Fragments são uma maneira conveniente de estruturar seu código quando você precisa retornar vários elementos adjacentes em um componente React.
