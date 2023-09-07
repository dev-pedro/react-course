const Challenge = () => {
  const a = 5
  const b = 10

  const sum = (a, b) => {
    console.log(a + b)
  }

  return (
    <div>
      <div>
        <h2>Valores a serem somados: {`${a} + ${b}`}</h2>
        <button onClick={() => sum(a, b)}>Clique aqui para somar!</button>
      </div>
    </div>
  )
}
export default Challenge
