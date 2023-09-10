const CarDetails = ({ brand, km, newCar }) => {
  return (
    <ul >
      <li>{brand}</li>
      <li>{km}</li>
      <li>{newCar ? "O carro é novo." : "Ocarro é usado."}</li>
    </ul>
  )
}

export default CarDetails
