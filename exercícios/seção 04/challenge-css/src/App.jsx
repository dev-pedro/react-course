import "./App.css"
import CarDetails from "./assets/CarDetails"

function App() {
  const cars = [
    {
      id: 1,
      brand: "Fiat",
      model: "Fiorino",
      year: "2023",
      color: 'Branco',
      km: 0,
      isNew: true
    },
    {
      id: 2,
      brand: "Chevrolet",
      model: "Celta",
      year: "2002",
      color: 'Prata',
      km: 298123,
      isNew: false
    },
    {
      id: 3,
      brand: "Ford",
      model: "Pampa",
      year: "1985",
      color: 'Cinza',
      km: 578563,
      isNew: false
    }
  ]

  return (
    <>
      <h1 className="title">Showroom de carros</h1>
      <CarDetails cars={cars} />
    </>
  )
}

export default App
