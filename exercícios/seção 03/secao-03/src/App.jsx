import { useState } from "react"
import "./App.css"
import city from "./assets/city.jpg"
import ConditionalRender from "./components/ConditionalRender"
import ListRender from "./components/ListRender"
import ManageDate from "./components/ManageDate"
import ShowUserName from "./components/ShowUserName"
import CarDetails from "./components/CarDetails"

const cars = [
  { id: 1, brand: "VW", km: 0, newCar: true },
  { id: 2, brand: "BMW", km: 1523, newCar: false },
  { id: 3, brand: "Chevrolet", km: 0, newCar: true }
]

function App() {
  const [userName] = useState("Pedro")
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
        <ManageDate />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name={userName} />
        {/* loop de carros */}
        {cars.map(({id, brand, km, newCar})=>(
          <CarDetails key={id} brand={brand} km={km} newCar={newCar}/>
        ))}
      </div>
    </>
  )
}

export default App
