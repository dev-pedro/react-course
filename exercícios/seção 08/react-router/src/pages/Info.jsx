import './Info.css'
import { useParams } from 'react-router-dom'

const Info = () => {
//6 - nested routes
  const {id} = useParams()
  return (
    <div>
      <h1>Mais informações sobre o produto: {id}</h1>
    </div>
  )
}

export default Info