// import { useContext } from "react"
// import { CounterContext } from "../../../context/CounterContext"
import { ChangeCounter } from "../../../context/ChangeCounter"
//4 - refatorando com hook
import { useCounterContext } from "../../../hooks/useCounterContext"
import { useTitleColorContext } from "../../../hooks/useTitleColorContext"

const About = () => {
  const { counter } = useCounterContext()

  //5 - criando um contexto mais complexo
  const { color } = useTitleColorContext()
  console.log("Cor: ", color)
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>valor do contador: {counter}</p>
      {/* 3 - alterando valor do contexto */}
      <ChangeCounter />
    </div>
  )
}

export default About
