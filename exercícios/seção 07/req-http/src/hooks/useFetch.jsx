import { useEffect, useRef, useState } from "react"

//4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  //5 - refatorando o POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  //6 - loading
  const [loading, setLoading] = useState(false)

  //7 - tratando erros
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      //6 - loading
      setLoading(true)

      try {
        const res = await fetch(url)

        const dataJson = await res.json()
        setData(dataJson)
        setError(null)
      } catch (error) {
        setError("Houve algum erro ao carregar os dados: ", error)
      }

      setLoading(false)
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
        const fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const dataJson = await res.json()
        setCallFetch(dataJson)
      }
    }

    httpRequest()
  }, [config, method, url])

  return { data, httpConfig, loading, error }
}
