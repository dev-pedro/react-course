# Previous State

## Resumo

Em React, quando você precisa atualizar o estado de um componente com base no seu estado anterior, você deve usar a forma funcional do método `setState`. A forma funcional recebe o estado anterior como um argumento e retorna o estado atualizado. Isso é importante quando se trata de atualizações de estado assíncronas ou quando você deseja garantir que as alterações de estado sejam baseadas no estado mais recente.

Aqui está um exemplo de como usar a forma funcional do `setState`:

```jsx
import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    // Usando a forma funcional do setState
    setCount((estadoAnterior) => estadoAnterior + 1);
  };

  const decrementar = () => {
    // Usando a forma funcional do setState
    setCount((estadoAnterior) => estadoAnterior - 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}
```

Neste exemplo, estamos usando a forma funcional do `setState` nos métodos `incrementar` e `decrementar`. Isso garante que as alterações de estado sejam feitas com base no estado anterior, independentemente de quão assíncronas as atualizações possam ser.
