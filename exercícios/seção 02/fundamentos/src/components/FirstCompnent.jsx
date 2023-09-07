import MyComponent from "./MyComponent"

const FirstComponent = () => {
  /* comentário multi linha */
  return (
    <div>
      {/* Algum comentário */}
      <h3>Meu primeiro componente</h3>
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  )
}

export default FirstComponent
