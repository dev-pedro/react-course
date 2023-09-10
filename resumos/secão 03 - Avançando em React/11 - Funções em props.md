# Funções em props

## Resumo

Em React, você pode passar funções como props de um componente pai para um componente filho. Isso é uma prática comum e útil quando você deseja que o componente filho chame uma função do componente pai em resposta a algum evento ou interação do usuário. Essa abordagem permite que os componentes interajam e compartilhem dados e comportamento.

Aqui está um exemplo de como você pode passar uma função como prop:

Suponha que você tenha um componente pai chamado `Pai` e um componente filho chamado `Filho`. O componente pai deseja passar uma função `handleChange` para o componente filho, que será chamada quando o usuário interagir com um elemento de entrada no componente filho.

Componente Pai (`Pai.js`):

```jsx
import React, { useState } from 'react';
import Filho from './Filho';

function Pai() {
  const [valor, setValor] = useState('');

  const handleChange = (novoValor) => {
    setValor(novoValor);
  };

  return (
    <div>
      <p>Valor no Pai: {valor}</p>
      <Filho handleChange={handleChange} />
    </div>
  );
}

export default Pai;
```

Componente Filho (`Filho.js`):

```jsx
import React, { useState } from 'react';

function Filho({ handleChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const novoValor = event.target.value;
    setInputValue(novoValor);
    handleChange(novoValor); // Chama a função passada como prop
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo"
      />
      <p>Valor no Filho: {inputValue}</p>
    </div>
  );
}

export default Filho;
```

Neste exemplo:

- No componente pai (`Pai`), definimos uma função `handleChange` que atualiza o estado `valor` quando chamada. Passamos essa função como prop `handleChange` para o componente filho (`Filho`).

- No componente filho (`Filho`), usamos a prop `handleChange` como um manipulador de eventos para o elemento de entrada. Quando o usuário digita algo, a função `handleInputChange` é chamada, que por sua vez chama a função `handleChange` passada como prop. Isso permite que o valor do componente filho seja refletido no componente pai em tempo real.

Essa é uma maneira eficaz de permitir a comunicação e a interação entre componentes React usando funções como props. É uma prática comum e útil para criar componentes reutilizáveis e dinâmicos.
