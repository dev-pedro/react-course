import "./App.css"
//1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom"
//components
import Navbar from "./components/Navbar/Navbar"
//pages
import Home from "./components/Pages/Home/Home"
import About from "./components/Pages/About/About"
import Products from "./components/Pages/Products/Products"

//components

function App() {
  return (
    <>
      {" "}
      <div className="APP">
        <h1>Context</h1>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
