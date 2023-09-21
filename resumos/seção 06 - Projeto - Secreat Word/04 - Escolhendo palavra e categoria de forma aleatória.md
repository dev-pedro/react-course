# Escolhendo palavra e categoria de forma aleatória

## Resumo

Criando os funções para pegar as palavras aleatoriamente.

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

const pickedWordAndCategory = (ChooseCategory) => {
  //pick a random category
  const categories = Object.keys(wordsList)
  const category =
    ChooseCategory ||
    categories[Math.floor(Math.random() * Object.keys(categories).length)]

  //pick a random word
  const word =
    wordsList[category][Math.floor(Math.random() * wordsList[category].length)]
  return { category, word }
}

const wordNormalizeAndSplit = (word) => word.toLowerCase().split("")

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  /* starts the secreat word game */
  const startGame = () => {
    // pick word and pick category
    const { category, word } = pickedWordAndCategory()

    setPickedWord(wordNormalizeAndSplit(word))
    setPickedCategory(category)

    setGameStage(stages[1].name)
  }

  /*  process the letter input */
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  /*  restarts the game */
  const restartGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver restartGame={restartGame} />}
      </div>
    </>
  )
}

export default App

```

###### `pickedWordAndCategory`

```jsx
const pickedWordAndCategory = (ChooseCategory) => {
  //pick a random category
  const categories = Object.keys(wordsList)
  const category =
    ChooseCategory ||
    categories[Math.floor(Math.random() * Object.keys(categories).length)]

  //pick a random word
  const word =
    wordsList[category][Math.floor(Math.random() * wordsList[category].length)]
  return { category, word }
}
```

A função `pickedWordAndCategory` é responsável por retornar uma palavra `word`  e uma categoria `category`, caso a categoria não seja escolhida pelo usuário a função gera retorna uma aleatória.

###### `wordNormalizeAndSplit`

```jsx
const wordNormalizeAndSplit = (word) => word.toLowerCase().split("")
```

A função `wordNormalizeAndSplit` é responsável por dividir a palavra secreta e normaliza-la em um array.

###### `startGame`

```jsx
...
const [pickedWord, setPickedWord] = useState("")
const [pickedCategory, setPickedCategory] = useState("")
const [letters, setLetters] = useState([])
...
const startGame = () => {
    // pick word and pick category
    const { category, word } = pickedWordAndCategory()

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordNormalizeAndSplit(word))

    setGameStage(stages[1].name)
  }

```

A função `startGame` chama as funções citadas anteriormente, salvam os estados das palavras e muda o estado `setGameStage` para começar a partida.


