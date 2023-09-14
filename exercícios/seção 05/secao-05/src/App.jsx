import "./App.css"
import MyForm from "./assets/MyForm"

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm />
      {/* 6 - controlled input -formulário de edição */}
      <MyForm user={{ name: "Pedro", email: "dev.pedro.rjas@gmail.com", bio: 'Eu sou programador', role: 'admin' }} />
    </>
  )
}

export default App
