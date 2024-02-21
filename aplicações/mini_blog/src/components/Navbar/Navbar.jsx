import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.css"

const Navbar = () => {
  const loged = false
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to={"/"}>
        Mini <span>Blog</span>
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
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/about"}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? (styles.login_register, styles.active)
                : styles.login_register
            }
            to={"/register"}
          >
            Cadastrar
          </NavLink>
        </li>
        <li>
          <NavLink
            className={!loged ? styles.login_register : styles.hidden}
            to={"/login"}
          >
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink
            className={!loged ? styles.hidden : styles.login_register}
            to={"/"}
          >
            Sair
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
