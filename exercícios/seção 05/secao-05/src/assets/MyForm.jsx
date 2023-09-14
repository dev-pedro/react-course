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
        {/*  2 - label envolvendo o input */}
        <label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder="Digite seu e-mail" />
        </label>
          <input type="submit" value="Eviar" />
      </form>
    </div>
  )
}

export default MyForm
