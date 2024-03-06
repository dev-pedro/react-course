import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./PostDetails.module.css"

const PostDetails = ({ post }) => {

  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>{post.createdBy}</p>

      {/* Adicione estilos de módulo CSS para o contêiner das tags, se necessário */}
      <div className={styles.tags}>
        {Array.isArray(post.tagsArray) &&
          post.tagsArray.map((tag, index) => (
            <p key={index}>
              <span>#</span>
              {tag}
            </p>
          ))}
      </div>

      <Link to={`/post/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
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
