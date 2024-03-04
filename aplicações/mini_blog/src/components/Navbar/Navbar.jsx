import { NavLink } from "react-router-dom"

//hooks
import { useAuthentication } from "../../hooks/useAuthentication"

//context
import { useAuthValue } from "../../context/AuthContext"

import styles from "./Navbar.module.css"

const Navbar = () => {
  const { user } = useAuthValue()
  const { auth, logout } = useAuthentication()

  return (
    <nav className={styles.navbar}>
      {/* left */}
      <div className={styles.left}>
        <NavLink className={styles.brand} to={"/"}>
          You <span>Blog</span>
        </NavLink>
      </div>
      {/* center */}
      <div className={styles.center}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/"}
        >
          Home
        </NavLink>

        {!user && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/register"}
            >
              Cadastrar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/login"}
            >
              Entrar
            </NavLink>
          </>
        )}
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/about"}
        >
          Sobre
        </NavLink>
        {user && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/post/create"}
            >
              Novo Post
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          </>
        )}
      </div>
      {/* right */}
      <div className={styles.right}>
        {user && (
          <div className={styles.user_name}>
            <span>Olá, {user.displayName}!</span>
            <NavLink
              className={styles.sair}
              onClick={() => logout(auth)}
              to={"/"}
            >
              (Sair)
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
