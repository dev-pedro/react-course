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
