/* eslint-disable react/prop-types */
import "./index.css"

const GameOver = ({ restartGame, score }) => {
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={restartGame}>Jogar novamente</button>
    </div>
  )
}

export default GameOver
