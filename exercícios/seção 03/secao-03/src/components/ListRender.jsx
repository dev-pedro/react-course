import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["pedro", "Matheus", "Paulo"])
  const [users, setUsers] = useState([
    { id: 1, name: "Pedro", age: 45 },
    { id: 2, name: "Matheus", age: 38 },
    { id: 3, name: "Paulo", age: 48 }
  ])

  const deleteUser = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      console.log(prevUsers, randomNumber)
      return prevUsers.filter((user) => randomNumber != user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ol>
      <button onClick={deleteUser}>Delete o usuário</button>
    </div>
  )
}

export default ListRender
