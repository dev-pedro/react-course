import { useState } from "react"
import "./App.css"
import city from "./assets/city.jpg"
import ConditionalRender from "./components/ConditionalRender"
import ListRender from "./components/ListRender"
import ManageDate from "./components/ManageDate"
import ShowUserName from "./components/ShowUserName"

function App() {
  const name = 'Paulo'
  const [userName] = useState('Pedro')
  return (
    <>
      <div>
        <h1>Avançando no React!</h1>
        <h2>Seção - 03</h2>
        {/* imagem em public */}
        <div>
          <img src="/public/img1.jpg" alt="Paisagem" />
        </div>
        {/* imagem em assets */}
        <div>
          <img src={city} alt="Cidade" />
        </div>
        <div>
          <ManageDate />
        </div>
        <div>
          <ListRender />
        </div>
        <div>
          <ConditionalRender />
        </div>
        <div>
          <ShowUserName name={userName} />
        </div>
      </div>
    </>
  )
}

export default App
