import { useState } from "react"

const ManageDate = () => {
  const [number, setNumber] = useState(10)
  let someData = 10


  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button
          onClick={() => {
            someData = 15
          }}
        >
          Mudar variável
        </button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button
          onClick={() => {
            setNumber(number + 10)
          }}
        >
          Mudar valor de number
        </button>
      </div>
    </div>
  )
}

export default ManageDate
