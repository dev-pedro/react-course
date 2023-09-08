# O Que São Hooks?

## Resumo

## Hooks

Os hooks são funções especiais fornecidas pelo React que permitem que você use recursos do React, como estado e ciclo de vida, em componentes funcionais. Antes dos hooks, esses recursos eram acessíveis apenas em componentes de classe. Os hooks foram introduzidos no React 16.8 e são uma maneira mais simples e poderosa de lidar com o estado e os efeitos colaterais em componentes funcionais. Alguns dos hooks mais comuns incluem:

1. **useState**: Permite que você adicione estado a componentes funcionais. Com o `useState`, você pode declarar variáveis de estado e atualizá-las no corpo de um componente funcional.
   
   Exemplo:
   
   ```jsx
   import React, { useState } from 'react';
   
   function Contador() {
     const [count, setCount] = useState(0);
   
     return (
       <div>
         <p>Você clicou {count} vezes.</p>
         <button onClick={() => setCount(count + 1)}>Clique em mim</button>
       </div>
     );
   }
   ```

2. **useEffect**: Permite que você realize efeitos colaterais em componentes funcionais, como executar código após a renderização ou limpar recursos quando o componente é desmontado.
   
   Exemplo:
   
   ```jsx
   import React, { useState, useEffect } from 'react';
   
   function ExemploDeEfeito() {
     const [count, setCount] = useState(0);
   
     useEffect(() => {
       document.title = `Você clicou ${count} vezes`;
     });
   
     return (
       <div>
         <p>Você clicou {count} vezes.</p>
         <button onClick={() => setCount(count + 1)}>Clique em mim</button>
       </div>
     );
   }
   ```

3. **useContext**: Permite que você acesse o contexto React em componentes funcionais. O contexto é útil para passar dados globalmente através da árvore de componentes sem a necessidade de props intermediárias.
   
   Exemplo:
   
   ```jsx
   import React, { useContext } from 'react';
   
   const MeuContexto = React.createContext();
   
   function ComponenteConsumidor() {
     const valor = useContext(MeuContexto);
     return <p>Valor do contexto: {valor}</p>;
   }
   
   function App() {
     return (
       <MeuContexto.Provider value="Hello, World!">
         <ComponenteConsumidor />
       </MeuContexto.Provider>
     );
   }
   ```

4. **useReducer**: Permite que você gerencie o estado complexo com base em ações. É semelhante ao `useState`, mas pode ser usado quando o estado precisa de lógica mais avançada para atualização.
   
   Exemplo:
   
   ```jsx
   import React, { useReducer } from 'react';
   
   const initialState = { count: 0 };
   
   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         return state;
     }
   }
   
   function Contador() {
     const [state, dispatch] = useReducer(reducer, initialState);
   
     return (
       <div>
         <p>Você clicou {state.count} vezes.</p>
         <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
       </div>
     );
   }
   ```

Existem outros hooks, como `useMemo`, `useCallback`, `useRef` e muitos mais, que permitem que você realize tarefas específicas em componentes funcionais. Os hooks tornam mais fácil a organização e a reutilização de lógica em seus componentes funcionais, tornando o React mais poderoso e flexível.

## Custom Hooks

Os "Custom Hooks" (Hooks personalizados) são uma maneira avançada e poderosa de reutilizar lógica de estado e efeitos em componentes funcionais React. Eles permitem que você extraia e compartilhe a lógica comum entre componentes funcionais em seu aplicativo, melhorando a modularidade e a reutilização de código. Para criar um Custom Hook, siga estas práticas comuns:

1. **Nomeação**: Os Custom Hooks geralmente começam com a palavra "use" para indicar que são hooks. Por exemplo, `useContador` ou `useApi`.

2. **Extração de Lógica**: Identifique a lógica que você deseja reutilizar em seus componentes funcionais e extraia-a para uma função dentro do Custom Hook.

3. **Hooks Internos**: Você pode usar hooks internos, como `useState` e `useEffect`, em um Custom Hook. No entanto, é importante observar que os Custom Hooks não devem ser chamados condicionalmente (ou seja, dentro de estruturas de controle condicionais) ou em funções assíncronas.

4. **Retorno**: Um Custom Hook geralmente retorna valores (por exemplo, estado ou funções) que seus componentes podem utilizar. Certifique-se de documentar claramente o que o hook retorna e como usá-lo.

Aqui está um exemplo de um Custom Hook simples chamado `useContador`, que encapsula a lógica para incrementar e decrementar um contador:

```jsx
import { useState } from 'react';

function useContador(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

export default useContador;
```

Você pode usar esse Custom Hook em seus componentes funcionais da seguinte maneira:

```jsx
import React from 'react';
import useContador from './useContador';

function ContadorComponent() {
  const { count, increment, decrement } = useContador(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

function OutroComponente() {
  const { count, increment, decrement } = useContador(10);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}
```

Isso torna a lógica do contador facilmente reutilizável em diferentes partes do seu aplicativo. Os Custom Hooks podem ser compartilhados entre vários componentes e promovem a modularidade e a manutenção do código. Certifique-se de documentar bem seus Custom Hooks para que outros desenvolvedores possam entender como usá-los.
