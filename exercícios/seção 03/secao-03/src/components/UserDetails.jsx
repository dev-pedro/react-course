const UserDetails = ({ users }) => {

  const canTakeCNH = ({ age }) => {
    return age >= 18
      ? "pode tirar carteira de habilitação"
      : "não pode tirar carteira de habilitação"
  }
  
  return (
    <div>
      {users.map((user) => (
        <ul key={user.id}>
          <h4>{user.name} </h4>
          <p>
            Idade: {user.age} | Profissão: {user.profession}
          </p>
          <p>
            O {user.name}, {canTakeCNH(user)}
          </p>
        </ul>
      ))}
    </div>
  )
}

export default UserDetails
