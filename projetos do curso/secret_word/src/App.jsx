// css
import "./App.css"
// components
import StartScreen from "./components/StartScreen"
import Game from "./components/Game"
import GameOver from "./components/GameOver"
// hooks
import { useCallback, useEffect, useState } from "react"
// data
import { categoriasEPalavras } from "./data/words"
import Congatulation from "./components/Congratulation"

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

const pickedWordAndCategory = (ChooseCategory, wordsList) => {
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
  const [words] = useState(categoriasEPalavras)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLeter] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [allLettersPlayed, setAllLettersPlayed] = useState([])
  const guessesQty = 5
  const [guess, setGuess] = useState(guessesQty)
  const [score, setScore] = useState(0)
  const [winCondition, setWinCondition] = useState(false)

  /* starts the secreat word game */
  const startGame = useCallback(() => {
    //clear all letters
    clearLettersSates()
    // pick word and pick category
    const { category, word } = pickedWordAndCategory(null, words)

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordNormalizeAndSplit(word))

    setGameStage(stages[1].name)
  }, [words])

  /*  process the letter input */
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLeter((actualGuessedLetter) => [
        ...actualGuessedLetter,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuess((actualGuess) => setGuess(actualGuess - 1))
    }

    setAllLettersPlayed([...allLettersPlayed, normalizedLetter])
  }

  const clearLettersSates = () => {
    setLetters([])
    setGuessedLeter([])
    setAllLettersPlayed([])
    setWrongLetters([])
  }
  //check if guesses ended
  useEffect(() => {
    if (guess <= 0) {
      clearLettersSates()
      setGameStage(stages[2].name)
    }
  }, [guess])

  //check win conditions
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    if (letters.length === 0) {
      return
    }

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => (actualScore += 100))
      setWinCondition(true)

      setTimeout(() => {
        startGame()
        setWinCondition(false)
      }, 2000)
    }
  }, [guessedLetters, letters, startGame])

  /*  restarts the game */
  const restartGame = () => {
    setScore(0)
    setGuess(guessesQty)
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
            allLettersPlayed={allLettersPlayed}
          />
        )}
        {gameStage === "end" && (
          <GameOver restartGame={restartGame} score={score} />
        )}
        <Congatulation winCondition={winCondition} />
      </div>
    </>
  )
}

export default App
