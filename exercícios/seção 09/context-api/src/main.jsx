import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { CounterContextProvider } from "./context/CounterContext.jsx"
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  /* 2 - criando provider */
  <CounterContextProvider>
    {/* 5 - criando um contexto mais complexo */}
    <TitleColorContextProvider>
      <App />
    </TitleColorContextProvider>
  </CounterContextProvider>
)
