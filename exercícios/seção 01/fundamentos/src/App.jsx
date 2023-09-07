// components
import FirstComponent from "./components/FirstCompnent"
import TemplateExpressions from "./components/TemplateExpressions"
// styles css
import "./App.css"
import MyComponent from "./components/MyComponent"

function App() {
  return (
    <>
      {/* Algum comentário */}
      <h1>Fundamentos - Primeiro Componente</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
    </>
  )
}

export default App
