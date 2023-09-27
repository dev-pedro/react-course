/* eslint-disable react/prop-types */
import { useRef, useState } from "react"
import "./index.css"

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guess,
  score,
  allLettersPlayed
}) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetter("")
    letterInputRef.current.focus()
  }

  console.log(letters)
  return (
    <div className="game">
      <h1>Adivinhe a palavra</h1>
      <div className="tip">
        <h2>
          Dica sobre a palavra:
          <br /> <span>{pickedCategory.split("_").join(" ")}</span>
        </h2>
      </div>
      <div className="points">
        <h3>Tentativas restantes <span>{guess}</span> | Pontuação: <span>{score}</span></h3>
      </div>
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
            autoFocus={true}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrong-letter-container">
        <h2>Letras já utilizadas</h2>
        {allLettersPlayed.sort().map((letter, index) => (
          <span
            key={index}
            className={wrongLetters.includes(letter) ? "wrong" : ""}
          >
            {letter},{" "}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Game
