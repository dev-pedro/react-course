# React Router

## Resumo

O React Router é uma biblioteca popular para lidar com roteamento em aplicativos React. Ele permite que você navegue entre diferentes componentes e URLs do aplicativo, criando uma experiência de navegação suave e intuitiva. O React Router é uma ferramenta poderosa para criar aplicativos de página única (Single Page Applications - SPAs) e aplicativos com várias páginas.

Aqui estão os conceitos fundamentais do React Router:

1. **`<BrowserRouter>`**: Este componente envolve o aplicativo e fornece a funcionalidade de roteamento. Ele geralmente é colocado no componente raiz do aplicativo.

2. **`<Route>`**: Um componente `<Route>` é usado para definir como o aplicativo deve corresponder a um URL específico com um componente. Você pode especificar um caminho (path) e um componente para cada rota.

3. **`<Switch>`**: O componente `<Switch>` é usado para envolver várias rotas e garante que somente a primeira rota que corresponda ao URL atual seja renderizada. Isso evita que várias rotas correspondam ao mesmo URL.

4. **`<Link>`**: O componente `<Link>` permite criar links para navegar entre diferentes páginas do aplicativo sem recarregar a página.

5. **`<Redirect>`**: O componente `<Redirect>` permite redirecionar o usuário para outra rota. Isso pode ser útil para autenticação, por exemplo.

Aqui está um exemplo simples de uso do React Router:

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Página Inicial</h1>;
}

function Sobre() {
  return <h1>Sobre nós</h1>;
}

function Contato() {
  return <h1>Entre em contato</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```

Neste exemplo, criamos um aplicativo com três páginas diferentes (`Home`, `Sobre` e `Contato`) e navegamos entre elas usando links. O componente `Switch` garante que apenas uma rota seja renderizada de cada vez.

Lembre-se de que você pode estender o uso do React Router para criar aplicativos mais complexos e dinâmicos, com roteamento aninhado, autenticação, proteção de rotas e muito mais, dependendo das necessidades do seu aplicativo.


