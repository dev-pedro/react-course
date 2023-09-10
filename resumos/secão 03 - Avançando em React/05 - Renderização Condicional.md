# Renderização Condicional

## Resumo

A renderização condicional é uma técnica importante em React que permite renderizar diferentes elementos ou componentes com base em uma condição. Isso é útil quando você deseja exibir ou ocultar partes da interface do usuário com base no estado do aplicativo ou em alguma lógica específica. Existem várias maneiras de realizar a renderização condicional em React:

1. **Operador ternário (Ternary Operator)**:
   
   Você pode usar o operador ternário para condicionar a renderização com base em uma expressão booleana. Aqui está um exemplo simples:
   
   ```jsx
   import React from 'react';
   
   function ComponenteCondicional({ exibir }) {
     return (
       <div>
         {exibir ? <p>Este elemento é exibido.</p> : <p>Este elemento está oculto.</p>}
       </div>
     );
   }
   ```

2. **Operador lógico AND (&&)**:
   
   Você pode usar o operador `&&` para renderizar condicionalmente um elemento com base em uma condição. Se a condição for verdadeira, o elemento é renderizado; caso contrário, ele não é renderizado. Por exemplo:
   
   ```jsx
   import React from 'react';
   
   function ComponenteCondicional({ exibir }) {
     return (
       <div>
         {exibir && <p>Este elemento é exibido.</p>}
       </div>
     );
   }
   ```

3. **Renderização condicional com uma função**:
   
   Você pode criar uma função que determina qual componente ou elemento deve ser renderizado com base na lógica que você precisa. Por exemplo:
   
   ```jsx
   import React from 'react';
   
   function ComponenteCondicional({ exibir }) {
     const renderizarElemento = () => {
       if (exibir) {
         return <p>Este elemento é exibido.</p>;
       } else {
         return <p>Este elemento está oculto.</p>;
       }
     };
   
     return (
       <div>
         {renderizarElemento()}
       </div>
     );
   }
   ```

4. **Renderização condicional com uma variável de estado**:
   
   Você pode usar uma variável de estado para controlar a renderização condicional. Alterar o estado disparará uma nova renderização com base na nova condição. Por exemplo:
   
   ```jsx
   import React, { useState } from 'react';
   
   function ComponenteCondicional() {
     const [exibir, setExibir] = useState(true);
   
     const toggleExibicao = () => {
       setExibir(!exibir);
     };
   
     return (
       <div>
         <button onClick={toggleExibicao}>Alternar Exibição</button>
         {exibir ? <p>Este elemento é exibido.</p> : <p>Este elemento está oculto.</p>}
       </div>
     );
   }
   ```

Essas são algumas das maneiras comuns de realizar a renderização condicional em React. A escolha da técnica depende das necessidades específicas do seu aplicativo e da clareza do seu código.


