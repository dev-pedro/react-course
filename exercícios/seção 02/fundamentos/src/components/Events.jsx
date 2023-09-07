const Events = () => {
  const handleMyEvent = (e) => {
    console.log("Ativou evento.", e.target)
  }

  const renderSomething = (x) => {
    if(x){
        return <h2>Opção escolhida foi: {`${x}`}</h2>
    }else{
        return <h2>Opção escolhida foi: {`${x}`}</h2>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("Clicou.")
          }}
        >
          Clique aqui também
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}
export default Events
