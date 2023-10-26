import "./App.css"

//1 - config react router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

//components
import Navbar from "./components/Navbar/Navbar"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"

function App() {
  return (
    <>
      <h1 className="lesson-title">React Router</h1>
      <Router>
        {/* 2 - links com react-router */}
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - rota dinâmica */}
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
