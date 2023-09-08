import './App.css'
import city from './assets/city.jpg'
import ListRender from './components/ListRender'
import ManageDate from './components/ManageDate'


function App() {

  return (
    <>
      <div>
        <h1>Avançando no React!</h1>
        <h2>Seção - 03</h2>
        {/* imagem em public */}
        <div>
          <img src="/public/img1.jpg" alt="Paisagem" />
        </div>
        {/* imagem em assets */}
        <div>
        <img src={city} alt="Cidade" />
        </div>
        <div>
          <ManageDate />
        </div>
        <div>
          <ListRender />
        </div>
      </div>
    </>
  )
}

export default App
