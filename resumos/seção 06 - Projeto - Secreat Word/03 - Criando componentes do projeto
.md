# Criando componentes do projeto

## Resumo

## Componentes das telas

Tela inicial:

```jsx
/* eslint-disable react/prop-types */
import './index.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1 className="title">Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar.</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen
```

Tela do Game:

```jsx
/* eslint-disable react/prop-types */
import "./index.css"

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Game Over</button>
    </div>
  )
}

export default Game
```

Tela fim do do jogo:

```jsx
/* eslint-disable react/prop-types */
import "./index.css"

const GameOver = ({ restartGame }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={restartGame}>Jogar novamente</button>
    </div>
  )
}

export default GameOver
```

## Navegação

A navegação entre as telas eta sendo feita por componentes, utilizando `useState` para salvar dados da navegação.

App.jsx

```jsx
// css
import "./App.css"
// components
import StartScreen from "./components/StartScreen"
import Game from "./components/Game"
import GameOver from "./components/GameOver"
// hooks
import { useCallback, useEffect, useState } from "react"
// data
import { wordsList, anotherList } from "./data/words"

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  /* starts the secreat word game */
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  /*  process the letter input */
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  /*  restarts the game */
  const restartGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
        {gameStage === 'end' && <GameOver restartGame={restartGame} />}
      </div>
    </>
  )
}

export default App
```


