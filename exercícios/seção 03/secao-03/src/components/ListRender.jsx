import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["pedro", "Matheus", "Paulo"])

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li data-js={index} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
