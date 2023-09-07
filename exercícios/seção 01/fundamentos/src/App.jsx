// components
import FirstComponent from "./components/FirstCompnent"
import TemplateExpressions from "./components/TemplateExpressions"
import MyComponent from "./components/MyComponent"
import Events from "./components/Events"
import Challenge from "./components/Challenge"
// styles css
import "./App.css"

function App() {
  return (
    <>
      {/* Algum comentário */}
      <h1>Fundamentos - Primeiro Componente</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App
