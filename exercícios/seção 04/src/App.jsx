import MyComponent from "./assets/MyComponent"
import Title from "./assets/Title"

function App() {
  const n = 25
  const isActive = true
  return (
    <>
      <div className="App">
        <h1>Seção 04 | React e CSS</h1>
        {/* style Component */}
        <MyComponent />
        {/* inline style */}
        <p
          style={{
            color: "blue",
            padding: "25px",
            background: "yellow",
            textAlign: "center",
            border: "3px solid black",
            fontSize: "25px"
          }}
        >
          Este elemento foi estilizado de forma inline
        </p>
        {/* CSS Dinâmico */}
        <p style={n < 10 ? { color: "purple" } : { color: "green" }}>
          CSS Dinâmico
        </p>
        <div style={{ color: isActive ? "blue" : "red" }}>Texto Dinâmico</div>

        {/* CSS modules*/}
        <Title />
      </div>
    </>
  )
}

export default App
