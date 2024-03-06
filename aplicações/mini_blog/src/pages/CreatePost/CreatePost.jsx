import styles from "./CreatePost.module.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useAuthentication } from "../../hooks/useAuthentication"
import { useInsertDocument } from "../../hooks/useInsertDocument"

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { insertDocument, response } = useInsertDocument("posts")

  const navigate = useNavigate()

  const { user } = useAuthValue()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")
    //validate image URL
    try {
      new URL(imageURL)
    } catch (error) {
      setFormError("A imagem precisa ser apartir de uma URL.")
    }

    //create tags and arrays
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
    //check all values
    if (!title || !imageURL || !tags || !body) {
      setFormError("Por favor preencha todos os campos!")
    }

    if (formError) return

    insertDocument({
      title,
      image: imageURL,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect to home page
    navigate("/")
  }

  return (
    <>
      <div className={styles.create_post}>
        <div>
          <h2>Criar Post</h2>
          <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título</span>
            <input
              type="text"
              name="title"
              required
              placeholder="Escreva o título..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>URL da imagem</span>
            <input
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que representa o seu post"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
            />
          </label>
          <label>
            <span>Conteúdo</span>
            <input
              type="text"
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </label>
          <label>
            <span>Tags</span>
            <input
              type="text"
              name="tags"
              required
              placeholder="Insira as tegs separadas por vírgulas"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>
          {response.error && <p className="error">{response.error}</p>}
          {formError && <p className="error">{formError}</p>}
          {!response.loading && <button className="btn">Postar</button>}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default CreatePost
