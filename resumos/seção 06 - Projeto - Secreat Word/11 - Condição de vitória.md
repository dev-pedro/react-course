# Condição de vitória

## Resumo

usando o hook `useEfect` para monitorar as letras que usuário escolhe no jogo temos a função de verificação abaixo.

###### App.jsx

```jsx

```

Para verificar se o jogador acertou a palavra foi usado o objeto `Set` do javascript.

Em JavaScript, o termo "set" se refere principalmente a uma estrutura de dados chamada "Set". Um objeto Set é uma coleção de valores exclusivos, o que significa que ele armazena apenas valores únicos, eliminando automaticamente quaisquer duplicatas. Essa estrutura de dados é muito útil quando você precisa armazenar uma lista de valores onde a unicidade dos elementos é importante.

Aqui está como criar e usar um objeto Set em JavaScript:

```javascript
// Criar um objeto Set vazio
const meuSet = new Set();

// Adicionar valores ao Set
meuSet.add(1);
meuSet.add(2);
meuSet.add(3);

// Adicionar um valor duplicado (não afeta o Set, pois Set armazena valores exclusivos)
meuSet.add(2);

// Verificar se um valor existe no Set
const contemDois = meuSet.has(2); // Retorna true

// Obter o tamanho do Set
const tamanho = meuSet.size; // Retorna 3, mesmo com a adição duplicada

// Remover um valor do Set
meuSet.delete(3);

// Iterar pelos valores do Set usando um loop for...of
for (const valor of meuSet) {
    console.log(valor);
}

// Converter um Set em um array
const meuArray = [...meuSet]; // [1, 2]

// Limpar todos os valores do Set
meuSet.clear();
```

Os objetos Set são úteis quando você deseja manter uma lista de valores únicos e não precisa se preocupar com a ordem dos elementos, pois a ordem de inserção não é garantida. Além disso, eles são usados para verificar rapidamente a existência de um valor e remover valores duplicados de arrays ou iteráveis.

Lembre-se de que os objetos Set são nativos do JavaScript e estão disponíveis nas versões mais recentes da linguagem, como ECMAScript 6 (ES6) e posteriores. Portanto, verifique se a versão do JavaScript que você está usando é compatível com objetos Set antes de usá-los em seu código.
