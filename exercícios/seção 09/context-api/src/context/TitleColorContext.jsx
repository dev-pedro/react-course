// 5 - criando um contexto mais complexo
import { createContext, useReducer } from "react"

export const TitleColorContext = createContext()

export const TitleColorReducer = (state, action) => {
  //swtich
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" }
    case "BLUE":
      return { ...state, color: "blue" }

    default:
      return state
      break
  }
}

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispath] = useReducer(TitleColorReducer, { color: "orange" })
  console.log("Title color context: ", state)

  return (
    <TitleColorContext.Provider value={{ ...state, dispath }}>
      {children}
    </TitleColorContext.Provider>
  )
}
