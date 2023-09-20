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
