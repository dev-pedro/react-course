# Consumindo states do jogo

## Resumo

Passando os estados para os componentes e consumindo esses dados.

###### App.jsx

```jsx
...
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLeter] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guess, setGuess] = useState(3)
  const [score, setScore] = useState(0)

  /* starts the secreat word game */
  const startGame = () => {
    // pick word and pick category
    const { category, word } = pickedWordAndCategory()

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordNormalizeAndSplit(word))

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
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guess={guess}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver restartGame={restartGame} />}
      </div>
    </>
  )
}

export default App
```

Os estados são passados para o componente `Game`.

###### Game.jsx

```jsx
/* eslint-disable react/prop-types */
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
          console.log(letter)
          return guessedLetters.includes(letter) ? (
            <span key={index} className="letter">{letter}</span>
          ) : (
            <span key={index} className="blank-square"></span>
          )
        })}
      </div>
      <div className="letter-container">
        <p>Tente adivinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrong-letter-container">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, index)=>(
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game

```


