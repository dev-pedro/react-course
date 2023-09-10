import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true)

  const [name,setName] = useState(true)

  const toggleExibicao = () => {
    console.log(name)
    setName(!name)
  }

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}

      <h1>Ternário</h1>
      {name ? <p>O nome é Pedro.</p> : <p>Nome não encontrado.</p>}
      <button onClick={toggleExibicao}>Mude o nome</button>
    </div>
  )
}

export default ConditionalRender
