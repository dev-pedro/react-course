# State Lift

## Resumo

O termo "state lift" (elevação de estado) refere-se a um padrão ou técnica em React onde você move o estado de um componente filho para o componente pai. Isso é feito para compartilhar e gerenciar o estado em um nível superior da hierarquia de componentes, tornando-o acessível a outros componentes que podem precisar desse estado.

A elevação de estado é usada quando vários componentes precisam compartilhar o mesmo estado ou quando você deseja centralizar o estado de um conjunto de componentes relacionados em um componente pai comum. Aqui está um exemplo comum de como a elevação de estado funciona:

Suponha que você tenha um aplicativo que exiba informações do usuário e permita que o usuário atualize seu nome em diferentes partes da interface. Você pode ter um componente pai que mantém o estado do nome do usuário e dois componentes filhos que exibem e permitem a edição do nome do usuário. O estado do nome do usuário é elevado para o componente pai para que ambos os componentes filhos possam acessá-lo e atualizá-lo.

```jsx
import React, { useState } from 'react';

function Pai() {
  const [nome, setNome] = useState('João');

  const handleChangeNome = (novoNome) => {
    setNome(novoNome);
  };

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome: {nome}</p>
      <Filho1 nome={nome} />
      <Filho2 onChangeNome={handleChangeNome} />
    </div>
  );
}

function Filho1({ nome }) {
  return (
    <div>
      <h2>Exibindo Nome</h2>
      <p>Nome: {nome}</p>
    </div>
  );
}

function Filho2({ onChangeNome }) {
  const handleInputChange = (event) => {
    onChangeNome(event.target.value);
  };

  return (
    <div>
      <h2>Editar Nome</h2>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default Pai;
```

Neste exemplo, o estado `nome` é mantido no componente `Pai`. Os componentes `Filho1` e `Filho2` recebem o estado como uma prop e, quando o usuário atualiza o nome no `Filho2`, ele chama a função `onChangeNome` passada como prop, que atualiza o estado no `Pai`. O `Filho1` exibe o nome atualizado diretamente do estado que recebeu como prop.

Esse é um exemplo simples de elevação de estado, mas o conceito se torna mais poderoso em aplicativos maiores e mais complexos, onde você deseja compartilhar estados entre vários componentes em diferentes partes da interface do usuário. Isso ajuda a manter a sincronia do estado e a simplificar o gerenciamento de estados em seu aplicativo React.


