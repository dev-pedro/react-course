import "./MyForm.css"
const MyForm = () => {
  return (
    <div>
      {/* 1 - criando o form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
        <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
          <input type="submit" value="Eviar" />
      </form>
    </div>
  )
}

export default MyForm
