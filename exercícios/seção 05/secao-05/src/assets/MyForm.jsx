/* eslint-disable react/prop-types */
import { useState } from "react"
import "./MyForm.css"
const MyForm = ({ user }) => {
  /* 6 - controlled input*/

  /* 3 - gerenciamento de dados*/
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState(user ? user.bio : "")
  const [role, setRole] = useState(user ? user.role : "")

  /* 6 - enviando o formulário */
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando o Formulário")
    console.log(name, email, bio, role)

    /* 7 - Limpar Formulário*/
    setName("")
    setEmail("")
    setBio("")
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
        {/* 8 - textarea */}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            id=""
            cols="20"
            rows="10"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Eviar" />
      </form>
    </div>
  )
}

export default MyForm
