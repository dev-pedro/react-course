const Events = () => {

    const handleMyEvent = (e)=>{
        console.log('Ativou evento.', e.target)
    }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
    </div>
  )
}
export default Events
