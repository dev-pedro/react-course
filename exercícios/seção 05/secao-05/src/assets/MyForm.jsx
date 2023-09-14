import { useState } from "react"
import "./MyForm.css"
const MyForm = () => {
  /* 3 - gerenciamento de dados*/
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  /* 4 - enviando o formulário */
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('Enviando o Formulário')
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
          />
        </div>
        {/*  2 - label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Eviar"/>
      </form>
    </div>
  )
}

export default MyForm
