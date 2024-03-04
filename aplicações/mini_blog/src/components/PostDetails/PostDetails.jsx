/* import styles from "./PostDetails.module.css"

import { Link } from "react-router-dom"

const PostDetails = ({ post }) => {
  console.log(post)
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      {/* <div>
        {post.tagsArrays.map((tag, index) => (
          <p key={index}>
            <span>#</span>
            {tag}
          </p>
          ))}
        </div> *
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  )
}


export default PostDetails
 */
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./PostDetails.module.css"

const PostDetails = ({ post }) => {
  console.log(post)

  return (
    <div className={styles.postContainer}>
      <div className={styles.card}>
        <img className={styles.postImage} src={post.image} alt={post.title} />
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.createdBy}>{post.createdBy}</p>

        {/* Adicione estilos de módulo CSS para o contêiner das tags, se necessário */}
        <div className={styles.tagsContainer}>
          {Array.isArray(post.tagsArray) &&
            post.tagsArray.map((tag, index) => (
              <p key={index} className={styles.tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
        </div>

        <Link to={`/posts/${post.id}`} className="btn btn-outline">
          Ler
        </Link>
      </div>
    </div>
  )
}

PostDetails.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    tagsArray: PropTypes.arrayOf(PropTypes.string)
    // Adicione outras propriedades conforme necessário
  }).isRequired
}

export default PostDetails
