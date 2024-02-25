import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_media}>
        <h5>Entre em contato:</h5>
        <p>
          Dev: <span>Pedro Henrique</span>
        </p>
        <div>
          <Link
            className={`${styles.github} `}
            to="https://github.com/dev-pedro"
          >
            GitHub
          </Link>
          <Link
            className={styles.linkedin}
            to="https://www.linkedin.com/in/pedro-henrique-programador/"
          >
            Linkedin
          </Link>
        </div>
      </div>

      <div className={styles.copy_right}>
        <h5>Escreva sobre o que você tem interrese!</h5>
        <p>
          You <span>Blog</span> &copy; 2024
        </p>
      </div>
    </footer>
  )
}

export default Footer
