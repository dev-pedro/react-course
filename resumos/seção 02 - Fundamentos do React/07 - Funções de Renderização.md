# Funções de Renderização

## Resumo

Se você deseja criar uma função que retorna JSX, mas fora da função padrão (que é exportada como componente principal), você pode fazê-lo. Isso pode ser útil quando você precisa de funções auxiliares que geram partes específicas de um componente, como elementos HTML ou pequenos componentes funcionais. Aqui está um exemplo de como fazer isso:

```jsx
import React from 'react';

function MeuComponente() {
  // Função auxiliar que retorna um elemento JSX
  function renderizarParagrafo() {
    return <p>Este é um parágrafo gerado pela função auxiliar.</p>;
  }

  return (
    <div>
      <h1>Meu Componente</h1>
      {renderizarParagrafo()} {/* Chama a função auxiliar aqui */}
    </div>
  );
}

export default MeuComponente;
```

Neste exemplo, a função `renderizarParagrafo` é uma função auxiliar que retorna um elemento JSX (um parágrafo). Esta função é chamada dentro da função de renderização principal `MeuComponente`, e o elemento JSX retornado por `renderizarParagrafo` é incluído na saída final do componente.

Lembre-se de que as funções auxiliares que retornam JSX podem melhorar a legibilidade e a organização do seu código, especialmente em componentes mais complexos. Elas também podem ser reutilizadas em várias partes do componente, se necessário.
