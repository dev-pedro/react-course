# Inpunt Select

## Resumo

Para criar um elemento `<select>` (caixa de seleção) em um componente React, você pode usar a tag `<select>` e dentro dela adicionar um ou mais elementos `<option>` para as opções disponíveis. Além disso, você pode usar o atributo `value` para controlar o valor selecionado do elemento `<select>` por meio do estado do componente. Aqui está um exemplo de como criar um `<select>` em um componente React:

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState(''); // Estado para armazenar a cidade selecionada

  const handleSelectChange = (event) => {
    setCidadeSelecionada(event.target.value); // Atualiza o estado com a cidade selecionada
  };

  return (
    <div>
      <label>
        Selecione uma cidade:
        <select
          value={cidadeSelecionada}
          onChange={handleSelectChange}
        >
          <option value="">Selecione uma cidade</option>
          <option value="sao_paulo">São Paulo</option>
          <option value="rio_de_janeiro">Rio de Janeiro</option>
          <option value="belo_horizonte">Belo Horizonte</option>
          <option value="salvador">Salvador</option>
        </select>
      </label>
      <p>Cidade selecionada: {cidadeSelecionada}</p>
    </div>
  );
}

export default Formulario;
```

Neste exemplo:

- Definimos um estado chamado `cidadeSelecionada` para controlar a cidade selecionada na caixa de seleção.

- Utilizamos a tag `<select>` para criar a caixa de seleção.

- Usamos a tag `<option>` para definir as opções disponíveis na caixa de seleção. O atributo `value` de cada `<option>` representa o valor associado a essa opção.

- O atributo `value` do elemento `<select>` é definido como `cidadeSelecionada`, o que significa que ele reflete o estado atual da cidade selecionada.

- Implementamos um manipulador de eventos `onChange` chamado `handleSelectChange`, que é acionado quando o usuário seleciona uma opção na caixa de seleção. Esse manipulador atualiza o estado `cidadeSelecionada` com o valor da opção selecionada.

- O valor do estado `cidadeSelecionada` é exibido na página abaixo da caixa de seleção para que o usuário possa ver a cidade selecionada.

Este é um exemplo simples de como criar uma caixa de seleção em um componente React e controlá-la com o estado do componente. Você pode adicionar mais opções e personalizar o componente de acordo com as necessidades do seu aplicativo.
