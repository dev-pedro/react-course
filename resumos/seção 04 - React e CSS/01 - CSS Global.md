# CSS Global

## Resumo

CSS (Cascading Style Sheets) é uma linguagem de marcação usada para estilizar páginas da web. Ela permite que você defina o visual e a formatação de elementos HTML em uma página. Você pode usar CSS para controlar cores, fontes, espaçamento, posicionamento e muito mais. Aqui estão algumas noções básicas sobre CSS:

1. **Seletores:** CSS usa seletores para identificar os elementos HTML que você deseja estilizar. Por exemplo, você pode usar `h1` para selecionar todos os cabeçalhos de nível 1 (`<h1>`).

2. **Propriedades:** Depois de selecionar um elemento, você pode aplicar propriedades CSS a ele. Por exemplo, para definir a cor do texto, você pode usar a propriedade `color` e especificar um valor, como `red` ou `#FF0000`.

3. **Valores:** As propriedades CSS têm valores associados a elas. Por exemplo, para a propriedade `font-size`, você pode usar valores como `16px` ou `1.2em`.

4. **Classes e IDs:** Além de seletores simples, você pode usar classes e IDs para estilizar elementos específicos. Classes são selecionadas com um ponto (`.`), e IDs com um hashtag (`#`).

Exemplo de código CSS simples:

```css
/* Seleciona todos os cabeçalhos de nível 1 e define a cor do texto para vermelho */
h1 {
    color: red;
}

/* Seleciona elementos com a classe "destaque" e define um fundo amarelo */
.destaque {
    background-color: yellow;
}

/* Seleciona o elemento com o ID "cabecalho" e define um tamanho de fonte maior */
#cabecalho {
    font-size: 24px;
}
```

Você pode incluir código CSS em seu documento HTML usando a tag `<style>` dentro do `<head>` ou pode criar um arquivo CSS externo e vinculá-lo ao seu HTML usando a tag `<link>`. Por exemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="seuestilo.css">
</head>
<body>
    <!-- Seu conteúdo HTML aqui -->
</body>
</html>
```

Isso é apenas uma introdução básica ao CSS. Existem muitas propriedades e recursos avançados que você pode explorar para personalizar completamente o estilo de suas páginas da web.

## Global

"CSS global" no contexto de estilização de páginas da web, pode estar se referindo a uma abordagem de aplicar estilos que afetam todos os elementos na página ou a um conceito mais amplo de gerenciamento de estilos em um nível global. Vou explicar ambos os conceitos:

1. **Estilos Globais para Todos os Elementos na Página:**
   Para aplicar estilos que afetam todos os elementos em uma página da web, você pode usar seletores globais, como o seletor `*`, que corresponde a todos os elementos. Isso pode ser útil para definir estilos padrão, como margens e preenchimentos iguais para todos os elementos ou uma fonte e tamanho de texto padrão para toda a página. Por exemplo:
   
   ```css
   * {
       margin: 0;
       padding: 0;
       font-family: Arial, sans-serif;
       font-size: 16px;
   }
   ```
   
   Nesse exemplo, todos os elementos na página terão margens e preenchimentos zerados, usarão a fonte Arial (ou uma fonte sans-serif padrão) e terão um tamanho de fonte de 16 pixels.

2. **Gerenciamento de Estilos Global:**
   Além da estilização global, também pode se referir ao gerenciamento global de estilos em uma aplicação web. Isso envolve a organização e a estruturação dos estilos CSS em uma aplicação para manter o código mais limpo e evitar conflitos de estilo. Isso é frequentemente alcançado por meio de uma metodologia de design, como o BEM (Block, Element, Modifier) ou o uso de pré-processadores CSS, como o Sass, que permitem criar variáveis e funções reutilizáveis para estilos globais.
   
   Aqui está um exemplo usando Sass para criar variáveis para cores globais:
   
   ```scss
   $cor-primaria: #3498db;
   $cor-secundaria: #e74c3c;
   
   body {
       background-color: $cor-primaria;
   }
   
   .botao {
       background-color: $cor-secundaria;
   }
   ```
   
   Dessa forma, você pode facilmente alterar as cores globais em um único lugar (nas variáveis) e elas serão aplicadas em toda a sua aplicação.

Lembre-se de que a abordagem global em CSS deve ser usada com cautela para evitar efeitos colaterais indesejados. É importante equilibrar a reutilização de estilos globais com a necessidade de estilos específicos para elementos individuais em sua página.


