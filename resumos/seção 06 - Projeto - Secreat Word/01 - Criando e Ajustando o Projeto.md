# Criando e Ajustando o Projeto

## Resumo

## Projeto

O projeto é um jogo de adivinhação de palavras.

## Comando iniciais e configurações iniciais

### Comando para criar o projeto

```bash
npm create vite@latest
```

### Limpeza e preparação inicial do código

App.jsx

```jsx
import "./App.css"

function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">Secret Word</h1>
      </div>
    </>
  )
}

export default App
```

  Index.html

```jsx
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Secret Word</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

App.css

```css
.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  margin: 0.5rem;
  font-size: 2rem;
  font-family: cursive;
}

```
