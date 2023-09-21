# Evento de inserção de letra

## Resumo

###### App.jsx

```jsx
...
/*  process the letter input */
  const verifyLetter = (letter) => {
    console.log(letter)
  }
...
```

###### Game.jsx

```jsx
/* eslint-disable react/prop-types */
import { useRef, useState } from "react"
import "./index.css"

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guess,
  score
}) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetter('')
    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span> 
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guess} tentativa(s).</p>
      <div className="word-container">
        {letters.map((letter, index) => {
          return guessedLetters.includes(letter) ? (
            <span key={index} className="letter">
              {letter}
            </span>
          ) : (
            <span key={index} className="blank-square"></span>
          )
        })}
      </div>
      <div className="letter-container">
        <p>Tente adivinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrong-letter-container">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game

```

## Referencias

###### useRef

`useRef` é um hook no React que permite criar uma referência para um elemento do DOM ou para um valor mutável que pode ser acessado diretamente. Ele é útil para interações com o DOM, animações, foco de elementos, integrações com bibliotecas que não funcionam bem com o modelo de dados do React, como jQuery, e para manter valores entre renderizações sem acionar uma nova renderização quando o valor muda.

Aqui estão alguns cenários comuns em que você pode usar `useRef`:

1. **Referência a elementos do DOM**: Você pode criar uma referência a um elemento do DOM para interagir diretamente com ele. Por exemplo:

```jsx
import React, { useRef } from 'react';

function MeuComponente() {
  const meuElementoRef = useRef(null);

  const handleClick = () => {
    meuElementoRef.current.focus();
  };

  return (
    <div>
      <input ref={meuElementoRef} />
      <button onClick={handleClick}>Focar no Input</button>
    </div>
  );
}
```

2. **Mantendo valores entre renderizações**: Você pode usar `useRef` para manter valores que não devem acionar uma nova renderização quando mudam. O valor em um objeto `ref` persiste entre renderizações. Por exemplo:

```jsx
import React, { useRef, useEffect } from 'react';

function MeuComponente() {
  const contador = useRef(0);

  useEffect(() => {
    contador.current += 1;
    console.log('Contador atual:', contador.current);
  }, []);

  return <div>Contador: {contador.current}</div>;
}
```

3. **Integração com bibliotecas externas**: `useRef` é frequentemente usado para integrar o React com bibliotecas que manipulam diretamente o DOM, como gráficos ou animações.

Lembre-se de que, ao usar `useRef`, você está trabalhando fora do ciclo de renderização normal do React, e as alterações em `ref` não acionarão uma nova renderização. Portanto, é importante usá-lo com cuidado e em cenários apropriados, principalmente quando a manipulação direta do DOM é necessária.
