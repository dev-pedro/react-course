import "./Home.css"
// import { useContext } from "react"
// import { CounterContext } from "../../../context/CounterContext"
import { ChangeCounter } from "../../../context/ChangeCounter"

//4 - refatorando com hook
import { useCounterContext } from "../../../hooks/useCounterContext"
//5 - criando um contexto mais complexo
import { useTitleColorContext } from "../../../hooks/useTitleColorContext"

const Home = () => {
  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  //5 - criando um contexto mais complexo
  const { color, dispath } = useTitleColorContext()
  console.log("Cor: ", color)

  //6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispath({ type: color })
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>valor do contador: {counter}</p>
      {/* 3 - alterando valor do contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home
