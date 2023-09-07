# Eventos

## Resumo

Em React, os eventos são usados para interagir com os elementos da interface do usuário e para responder às ações do usuário, como cliques, pressionamentos de tecla, hovers, etc. Os eventos em React são semelhantes aos eventos em JavaScript puro, mas com algumas diferenças importantes na forma como são tratados. Aqui estão os conceitos básicos para lidar com eventos em React:

1. **Adicionando Event Listeners**:
   Você pode adicionar manipuladores de eventos a elementos JSX usando a sintaxe `onNomeDoEvento`. Por exemplo, para adicionar um manipulador de evento de clique a um botão:
   
   ```jsx
   function MeuComponente() {
     function handleClick() {
       alert('Botão clicado!');
     }
   
     return (
       <button onClick={handleClick}>Clique em mim</button>
     );
   }
   ```
   
   Neste exemplo, o evento `onClick` é adicionado ao elemento de botão e está associado à função `handleClick` que será executada quando o botão for clicado.

2. **Manipuladores de Eventos**:
   Os manipuladores de eventos são funções JavaScript que definem o comportamento a ser executado quando o evento ocorrer. No exemplo acima, `handleClick` é um manipulador de eventos de clique.

3. **Passagem de Parâmetros para Manipuladores de Eventos**:
   Você pode passar parâmetros para manipuladores de eventos usando funções de callback. Por exemplo, se você deseja passar um valor ao manipulador de eventos:
   
   ```jsx
   function MeuComponente() {
     function handleClick(parametro) {
       alert('Valor passado: ' + parametro);
     }
   
     return (
       <button onClick={() => handleClick('MeuValor')}>Clique em mim</button>
     );
   }
   ```
   
   Neste caso, usamos uma função de callback inline para passar o valor `'MeuValor'` para o `handleClick`.

4. **Eventos Sintéticos**:
   React envolve os eventos do navegador em objetos chamados eventos sintéticos (SyntheticEvents) para garantir a compatibilidade entre navegadores. Você pode acessar propriedades comuns em eventos sintéticos, como `e.target`, para interagir com o evento.
   
   ```jsx
   function MeuComponente() {
     function handleClick(e) {
       alert('Cliquei em ' + e.target.tagName);
     }
   
     return (
       <button onClick={handleClick}>Clique em mim</button>
     );
   }
   ```
   
   Neste exemplo, `e.target` refere-se ao elemento que foi clicado.

5. **Prevenção de Comportamento Padrão**:
   Você pode usar `e.preventDefault()` para evitar o comportamento padrão de um evento, como a submissão de um formulário ou a abertura de um link.
   
   ```jsx
   function MeuComponente() {
     function handleClick(e) {
       e.preventDefault();
       alert('Cliquei no link, mas evitei a navegação.');
     }
   
     return (
       <a href="https://www.example.com" onClick={handleClick}>Clique em mim</a>
     );
   }
   ```

Estes são os conceitos básicos para lidar com eventos em React. Eventos são uma parte essencial do desenvolvimento de interfaces de usuário interativas e responsivas em aplicativos React.


