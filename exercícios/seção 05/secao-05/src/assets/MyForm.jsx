/* eslint-disable react/prop-types */
import { useState } from "react"
import "./MyForm.css"
const MyForm = ({user}) => {
  /* 6 - controlled input*/

  /* 3 - gerenciamento de dados*/
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")

  /* 6 - enviando o formulário */
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando o Formulário")
    console.log(name, email)
  }

  /* 3 - gerenciamento de dados*/
  const handleName = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      {/* 1 - criando o form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*  2 - label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            /* 5 - alteração de state inline  */
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Eviar" />
      </form>
    </div>
  )
}

export default MyForm
