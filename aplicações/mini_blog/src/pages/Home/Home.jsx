// CSS
import styles from "./Home.module.css"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

const Home = () => {
  const [query, setQuery] = useState("")
  const [post] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={styles.home}>
      <h2>Veja os nossos post mais recentes</h2>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        <h2>Posts...</h2>
        {post && post.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link className="btn" to="/post/create">
              Criar primeiro post
            </Link>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Home
