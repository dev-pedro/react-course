# Estado de Loading

## Resumo

Para criar um indicador de carregamento durante uma requisição `fetch`, você pode usar o estado para controlar o carregamento e a exibição de um componente de carregamento ou uma mensagem enquanto a solicitação está em andamento. Aqui está um exemplo de como fazer isso:

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('sua-url-da-api-aqui');
        if (!response.ok) {
          throw new Error('Falha na solicitação');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false); // Quando os dados são carregados com sucesso, definimos isLoading como falso.
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setIsLoading(false); // Em caso de erro, também definimos isLoading como falso.
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Carregando dados...</p>
      ) : data ? (
        <div>
          {/* Renderize seus dados aqui */}
        </div>
      ) : (
        <p>Dados não encontrados.</p>
      )}
    </div>
  );
}

export default App;
```

Neste exemplo:

1. Inicializamos o estado `isLoading` como `true` para indicar que a solicitação está em andamento.

2. Usamos o hook `useEffect` para fazer a solicitação `fetch` assim que o componente é montado.

3. Durante a solicitação, exibimos "Carregando..." na interface.

4. Se a solicitação for bem-sucedida e recebermos dados, definimos `isLoading` como `false` e renderizamos os dados.

5. Se ocorrer algum erro na solicitação, também definimos `isLoading` como `false` e exibimos uma mensagem de erro.

Isso fornece um feedback claro ao usuário durante a solicitação, mostrando "Carregando dados..." enquanto os dados são buscados e tratando possíveis erros de forma adequada. Você pode personalizar as mensagens e o estilo conforme necessário para atender aos requisitos do seu aplicativo.
