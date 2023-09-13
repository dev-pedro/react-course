import styles from "./CarDetails.module.css"
const CarDetails = ({ cars }) => {

  return (
    <div>
      <div className={styles.container}>
        {cars.map((car) => (
          <div key={car.id} className={styles.card}>
            <div className={styles.carDetailTitle}>{car.model}</div>
            <ul className={styles.carDetailUl}>
              <li>
                {"Marca: "} {car.brand}
              </li>
              <li>
                {"Ano: "} {car.year}
              </li>
              <li>
                {"KM: "} {car.km}
              </li>
              <li>{car.color}</li>
              <li>{car.isNew ? "Novo" : "Usado"}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarDetails
