//TODO: subir server e app | 'npm run server' 'npm run dev'
import "./App.css"

//hooks
import { useEffect, useState, useRef } from "react"
//4 - custom hook
import { useFetch } from "./hooks/useFetch"

const url = "http://localhost:3000/products/"

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const inputName = useRef(null)

  //1- resgatando dados
  /* useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
      console.log(data)
    }

    fetchData()
  }, []) */

  //2 - enviando (add products)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    /* const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const newProduct = await res.json()

    //3 - carregamento dinâminco
    setProducts((actualProducts) => [...actualProducts, newProduct]) */

    //5 - refatorando POST
    httpConfig(product, "POST")

    setName("")
    setPrice("")
    inputName.current.focus()
  }

  //8 - delete product
  const deleteProduct = async (urlProduct) => {
    httpConfig(urlProduct, "DELETE")
  }

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        {/* 6 - loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
          <ul>
            {items?.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}{" "}
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="divider"></div>
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                required={true}
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                ref={inputName}
              />
            </label>
            <label>
              Preço:
              <input
                required={true}
                type="number"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {/* 6 - state de loading no POST */}
            {loading && <input type="submit" disabled={true} value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </form>
        </div>
        <div className="divider"></div>
      </div>
    </>
  )
}

export default App
