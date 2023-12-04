//3 - alterando context
import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export const ChangeCounter = () => {
  const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Sub value to counter
      </button>
    </div>
  )
}
