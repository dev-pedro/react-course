import { useContext } from "react"
import { TitleColorContext } from "../context/TitleColorContext"

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext)

  console.log(context)

  if (!context) {
    console.log("Contexto não encontrado")
  }

  return context
}
