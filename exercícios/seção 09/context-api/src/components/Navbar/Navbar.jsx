import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="left"></div>
          <div className="center"></div>
          <div className="right">
            <NavLink className={"button"} to={"/"}>
              Home
            </NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
