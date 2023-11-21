import "./Navbar.css"

//2 - links com react-router
import { /* Link */ NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      {/* 
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>Sobre</Link> 
      */}
      {/* 8 - NavLink */}
      <NavLink
        to={"/"}
        /* className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")} */
      >
        Home
      </NavLink>
      <NavLink to={"/about"}>Sobre</NavLink>
    </nav>
  )
}

export default Navbar
