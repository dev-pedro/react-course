/* eslint-disable react/prop-types */
import confetti from "../../assets/animations/confetti.gif"
import "./index.css"
const Congatulation = ({ winCondition }) => {
  const classCondition = winCondition
    ? "congratulations"
    : "congratulations hiden"
  return (
    <div className={classCondition}>
      <img src={confetti} alt="confetti" />
    </div>
  )
}

export default Congatulation
