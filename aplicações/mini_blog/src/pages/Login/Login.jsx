import styles from "./Login.module.css"

//hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const hundleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    const user = {
      email,
      password,
      error
    }
    const result = await login(user)

    if (!user) {
      setError("Usuário não encontrado.")
      console.log(user)
      return
    }

    console.log(result)
    return
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])
  return (
    <div className={styles.login}>
      <div>
        <h1>Faça login para postar</h1>
        <p>Entre para compartilhar suas histórias</p>
      </div>
      <form onSubmit={hundleSubmit}>
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

        {error && <p className="error">{error}</p>}
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  )
}

export default Login
