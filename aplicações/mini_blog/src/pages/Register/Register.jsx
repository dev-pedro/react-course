import styles from "./Register.module.css"

//hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading } = useAuthentication()

  const hundleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    const user = {
      displayName,
      email,
      password,
      confirmPassword,
      error
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      console.log(user)
      return
    }

    const result = await createUser(user)
    console.log(result)
  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])
  return (
    <div className={styles.register}>
      <div >
        <h2>Cadastre-se para postar</h2>
        <p>Crie seu usuário e compartilhe suas histórias</p>
      </div>
      <form onSubmit={hundleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome de usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      {error && <p className="error">{error}</p>}
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
      </form>
    </div>
  )
}

export default Register
