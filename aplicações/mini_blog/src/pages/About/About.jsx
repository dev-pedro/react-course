// CSS
import { Link } from "react-router-dom"
import styles from "./About.module.css"

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <h2>
          Sobre o You <span>Blog</span>
        </h2>
        <p>
          Este projeto consiste em um mini blog feito em React no front-end e
          Firebase no back-end.
        </p>
        <Link to="/post/create" className="btn">
          Crie seu post
        </Link>
      </div>
    </>
  )
}

export default About
