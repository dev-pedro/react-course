# Template Expressions

## Resumo

Template expressions são uma parte fundamental do JSX no React (ou em qualquer estrutura que use JSX). São usadas para inserir expressões JavaScript dentro do código JSX. As template expressions são colocadas entre chaves `{}` e permitem que você insira variáveis, execute cálculos e chame funções diretamente no seu código JSX. Aqui estão alguns exemplos de como as template expressions são usadas:

1. **Inserindo Variáveis**:
   Você pode usar template expressions para inserir variáveis dentro do JSX. Por exemplo:
   
   ```jsx
   const nome = "Alice";
   const element = <p>Olá, {nome}!</p>;
   ```
   
   Neste exemplo, a variável `nome` é inserida no elemento JSX usando a template expression `{nome}`.

2. **Executando Cálculos**:
   Você pode realizar cálculos dentro de uma template expression. Por exemplo:
   
   ```jsx
   const preco = 100;
   const desconto = 20;
   const precoFinal = preco - desconto;
   const element = <p>O preço final é: {precoFinal}</p>;
   ```
   
   Neste exemplo, o cálculo `preco - desconto` é realizado e o resultado é inserido no elemento JSX.

3. **Chamando Funções**:
   Você pode chamar funções diretamente dentro de uma template expression. Por exemplo:
   
   ```jsx
   function saudacao(nome) {
     return `Olá, ${nome}!`;
   }
   
   const nome = "Bob";
   const element = <p>{saudacao(nome)}</p>;
   ```
   
   Neste exemplo, a função `saudacao` é chamada com o argumento `nome` e o resultado é inserido no elemento JSX.

4. **Expressões Ternárias**:
   Você pode usar expressões ternárias em template expressions para renderizar conteúdo condicionalmente. Por exemplo:
   
   ```jsx
   const estaLogado = true;
   const mensagem = estaLogado ? "Bem-vindo!" : "Faça login.";
   const element = <p>{mensagem}</p>;
   ```
   
   Neste exemplo, dependendo do valor da variável `estaLogado`, a mensagem será renderizada de forma condicional.

As template expressions tornam o JSX uma linguagem poderosa para definir a interface do usuário, pois permitem a criação de conteúdo dinâmico e a interação com variáveis e funções JavaScript em tempo de renderização. Elas são uma parte essencial do desenvolvimento de aplicativos React.


