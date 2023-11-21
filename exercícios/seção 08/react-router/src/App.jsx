import "./App.css"

//1 - config react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"

//components
import Navbar from "./components/Navbar/Navbar"
import SearchForm from "./components/SearchForm/SearchForm"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Info from "./pages/Info"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"

function App() {
  return (
    <>
      <h1 className="lesson-title">React Router</h1>
      <Router>
        {/* 2 - links com react-router */}
        <Navbar />
        {/* 9 - search */}
        <div className="container">
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - rota dinâmica */}
            <Route path="/products/:id" element={<Product />} />
            {/* 6 - nested routes */}
            <Route path="/products/:id/info" element={<Info />} />
            {/* 9 - search */}
            <Route path="/search" element={<Search />} />
            {/* 10 - redirect */}
            <Route path="/company" element={<Navigate to="/about" />} />
            {/* 7 - no match route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
