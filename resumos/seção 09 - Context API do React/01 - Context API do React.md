# Context API do React

### Resumo

A **Context API** do React é uma ferramenta que permite compartilhar dados entre componentes sem a necessidade de passá-los explicitamente por meio de props em cada nível da árvore de componentes. Ela é especialmente útil quando você tem vários níveis de aninhamento e precisa acessar os mesmos dados em diferentes partes do aplicativo.

A **Context API** consiste em três partes principais:

1. **`createContext`**: Função que cria um contexto. Ela retorna um objeto com dois componentes: `Provider` e `Consumer`.

2. **`Provider`**: Componente que fornece os dados para os componentes filhos. Ele recebe uma propriedade chamada `value`, que é o dado que será compartilhado.

3. **`Consumer`**: Componente que permite que os componentes filhos acessem o contexto. No entanto, com as atualizações recentes do React (a partir da versão 16.3), é mais comum usar o hook `useContext` para consumir o contexto em componentes funcionais.

Aqui está um exemplo simples de como você pode usar a **Context API**:

```jsx
import React, { createContext, useContext, useState } from 'react';

// 1. Criação do contexto
const MeuContexto = createContext();

// 2. Componente Provider
function MeuProvider({ children }) {
  const [dadosCompartilhados, setDadosCompartilhados] = useState('Dados Iniciais');

  return (
    <MeuContexto.Provider value={{ dadosCompartilhados, setDadosCompartilhados }}>
      {children}
    </MeuContexto.Provider>
  );
}

// 3. Componente Consumidor (usando o hook useContext)
function MeuComponenteConsumidor() {
  const { dadosCompartilhados, setDadosCompartilhados } = useContext(MeuContexto);

  return (
    <div>
      <p>Dados Compartilhados: {dadosCompartilhados}</p>
      <button onClick={() => setDadosCompartilhados('Novos Dados')}>Atualizar Dados</button>
    </div>
  );
}

// 4. Componente que envolve a aplicação com o Provider
function App() {
  return (
    <MeuProvider>
      <div>
        <h1>Minha Aplicação</h1>
        <MeuComponenteConsumidor />
      </div>
    </MeuProvider>
  );
}

export default App;
```

Neste exemplo:

- Criamos um contexto chamado `MeuContexto` usando `createContext`.
- Criamos um componente `MeuProvider` que envolve os componentes onde queremos compartilhar dados. Ele usa o `Provider` para fornecer os dados especificados na propriedade `value`.
- Criamos um componente funcional chamado `MeuComponenteConsumidor` que consome os dados usando o hook `useContext`.
- No componente principal `App`, envolvemos a aplicação com `MeuProvider`.

Isso permite que `MeuComponenteConsumidor` acesse e atualize os dados compartilhados sem a necessidade de passá-los por props. A **Context API** é especialmente útil quando você precisa compartilhar dados entre componentes que estão a diferentes níveis na árvore de componentes.

### useContext e Context API

O `useContext` é um hook introduzido no React versão 16.8 que facilita o consumo de um contexto criado com a **Context API**. Ele simplifica a lógica de consumo de contexto em componentes funcionais, eliminando a necessidade de usar o componente `Consumer` ou criar componentes de ordem superior (HOCs) para consumir o contexto.

Vamos dar uma olhada em como usar `useContext` e discutir algumas diferenças em relação à abordagem tradicional usando o `Consumer`.

### Usando `useContext`:

```jsx
import React, { createContext, useContext } from 'react';

const MeuContexto = createContext();

function MeuComponenteConsumidor() {
  const { dadosCompartilhados, setDadosCompartilhados } = useContext(MeuContexto);

  return (
    <div>
      <p>Dados Compartilhados: {dadosCompartilhados}</p>
      <button onClick={() => setDadosCompartilhados('Novos Dados')}>Atualizar Dados</button>
    </div>
  );
}

function App() {
  return (
    <MeuProvider>
      <div>
        <h1>Minha Aplicação</h1>
        <MeuComponenteConsumidor />
      </div>
    </MeuProvider>
  );
}
```

### Usando `Consumer`:

```jsx
import React, { createContext } from 'react';

const MeuContexto = createContext();

function MeuComponenteConsumidor() {
  return (
    <MeuContexto.Consumer>
      {({ dadosCompartilhados, setDadosCompartilhados }) => (
        <div>
          <p>Dados Compartilhados: {dadosCompartilhados}</p>
          <button onClick={() => setDadosCompartilhados('Novos Dados')}>Atualizar Dados</button>
        </div>
      )}
    </MeuContexto.Consumer>
  );
}

function App() {
  return (
    <MeuProvider>
      <div>
        <h1>Minha Aplicação</h1>
        <MeuComponenteConsumidor />
      </div>
    </MeuProvider>
  );
}
```

### Diferenças e Vantagens:

1. **Sintaxe mais concisa**: O uso de `useContext` é mais conciso em comparação com o `Consumer`, reduzindo a quantidade de código necessária.

2. **Melhor legibilidade do código**: `useContext` torna o código mais legível, pois as informações do contexto são desestruturadas diretamente no corpo do componente.

3. **Facilidade de acesso a múltiplos contextos**: Se você tiver múltiplos contextos em um componente, `useContext` permite consumir cada contexto separadamente, enquanto com `Consumer`, você precisaria aninhar vários `Consumer` ou usar HOCs.

4. **Simplicidade na atualização do contexto**: `useContext` facilita a atualização do contexto, já que você obtém diretamente a função de atualização no mesmo nível que os dados compartilhados.

Em resumo, enquanto ambos `useContext` e `Consumer` são maneiras válidas de consumir um contexto no React, `useContext` oferece uma sintaxe mais limpa e uma abordagem mais direta, tornando o código mais legível e fácil de manter.
