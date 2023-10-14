# Custom Hooks

## Resumo

**Custom hooks** são funções em React que encapsulam a lógica de estado e efeitos personalizados para serem reutilizados em vários componentes. Eles permitem que você compartilhe e organize a lógica de um componente em uma função que pode ser facilmente importada e usada em qualquer componente funcional.

Para criar um **custom hook**, siga essas etapas:

1. **Nomeação**: Inicie o nome da sua função com "use" para indicar que é um hook personalizado.

2. **Extração de lógica**: Mova a lógica que deseja reutilizar para dentro da função do seu hook.

3. **Parâmetros opcionais**: Se o seu hook precisar de configuração, você pode passar argumentos para a função do hook.

4. **Retorno**: O hook deve retornar qualquer estado, funções ou dados que os componentes que o usarem possam precisar.

Aqui está um exemplo de um **custom hook** simples que gerencia o estado de um contador:

```jsx
import { useState } from 'react';

function useContador(inicial) {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return { contador, incrementar, decrementar };
}

export default useContador;
```

Agora, você pode usar este **custom hook** em qualquer componente funcional:

```jsx
import React from 'react';
import useContador from './useContador';

function MeuComponente() {
  const { contador, incrementar, decrementar } = useContador(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default MeuComponente;
```

Isso permite que você compartilhe facilmente a lógica de gerenciamento de estado do contador entre vários componentes, facilitando a reutilização e a manutenção do código. **Custom hooks** são uma ótima maneira de criar abstrações reutilizáveis em seus aplicativos React.

### Código usado no exercício

useFetch.jsx

```jsx
import { useEffect, useRef, useState } from "react"

//4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  //5 - refatorando o POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)

      const dataJson = await res.json()

      setData(dataJson)
    }
    fetchData()
  }, [url, callFetch])

  //5 - refatorando o POST
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      setMethod(method)
    }
  }

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const dataJson = await res.json()
        setCallFetch(dataJson)
      }
    }

    httpRequest()
  }, [config, method, url])

  return { data, httpConfig }
}
```

App.jsx

```jsx
//TODO: subir server e app | 'npm run server' 'npm run dev'
import "./App.css"

//hooks
import { useEffect, useState, useRef } from "react"
//4 - custom hook
import { useFetch } from "./hooks/useFetch"

const url = "http://localhost:3000/products"

function App() {
  const { data: items, httpConfig } = useFetch(url)

  console.log(<items></items>)

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
    httpConfig(product, 'POST')

    setName("")
    setPrice("")
    inputName.current.focus()
  }

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {items?.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
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
                type="number"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <input type="submit" value="Criar" />
          </form>
        </div>
        <div className="divider"></div>
      </div>
    </>
  )
}

export default App

```
