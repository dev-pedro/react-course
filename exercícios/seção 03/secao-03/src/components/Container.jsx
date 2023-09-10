const Container = ({ children, testing }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
      {children}
      <p>{testing}</p>
    </div>
  )
}

export default Container
