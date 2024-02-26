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
      <NavLink className={styles.brand} to={"/"}>
        You <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/register"}
              >
                Cadastrar
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/login"}
              >
                Entrar
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/about"}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/post/create"}
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <div className={styles.user_name}>
                <span>Olá, {user.displayName}!</span>
                <NavLink
                  className={styles.sair}
                  onClick={() => logout(auth)}
                  to={"/"}
                >
                  Sair
                </NavLink>
              </div>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
