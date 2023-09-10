const ChangeMessage = ({ handleMessage }) => {
  const message = ["Oi.", "Olá.", "Oi, Pedro!"]
  return (
    <div>
      <button onClick={() => handleMessage(message[0])}>0</button>
      <button onClick={() => handleMessage(message[1])}>1</button>
      <button onClick={() => handleMessage(message[2])}>2</button>
    </div>
  )
}

export default ChangeMessage
