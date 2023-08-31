# Primeiro Programa em TypeScript

### Resumo

Html:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introdução ao TS</title>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
```

TypeScript:

```typescript
const firstName = 'Pedro'
const anotherName = 1
const user = true

function greeting (name: string) {
    console.log('Ola ' + name)
}

greeting(firstName)
greeting(anotherName)
greeting(user)
```

O código acima é escrito em TypeScript, uma linguagem que adiciona tipagem estática ao JavaScript. Vou explicar o código linha por linha:

1. `const firstName = 'Pedro'`: Aqui, uma constante chamada `firstName` é declarada e atribuída com o valor `'Pedro'`, que é uma string. TypeScript infere automaticamente o tipo da variável como `string`.

2. `const anotherName = 1`: Aqui, outra constante chamada `anotherName` é declarada e atribuída com o valor `1`, que é um número. Novamente, TypeScript infere o tipo como `number`.

3. `const user = true`: Aqui, uma constante chamada `user` é declarada e atribuída com o valor `true`, que é um booleano. O TypeScript inferirá o tipo como `boolean`.

4. `function greeting (name: string) { ... }`: Aqui, uma função chamada `greeting` é definida. Ela possui um parâmetro chamado `name`, com o tipo declarado explicitamente como `string`. Isso significa que somente argumentos do tipo `string` podem ser passados para essa função.

5. `console.log('Ola ' + name)`: Dentro da função `greeting`, esta linha imprime uma mensagem de saudação no console. Ela concatena a string `'Ola '` com o valor do parâmetro `name` passado à função.

6. `greeting(firstName)`: Aqui, a função `greeting` é chamada com o argumento `firstName`, que é uma string. Como o tipo de `firstName` é compatível com o tipo esperado para o parâmetro `name`, isso funciona corretamente.

7. `greeting(anotherName)`: Aqui, a função `greeting` é chamada com o argumento `anotherName`, que é um número. Isso resultará em um erro de compilação, porque um número não é compatível com o tipo `string` esperado para o parâmetro `name`.

8. `greeting(user)`: Aqui, a função `greeting` é chamada com o argumento `user`, que é um booleano. Isso também resultará em um erro de compilação, pois um booleano não é compatível com o tipo `string` esperado para o parâmetro `name`.

Portanto, o código ilustra como o TypeScript permite a definição explícita de tipos e como ele ajuda a capturar erros de tipos em tempo de compilação, aumentando a segurança e a qualidade do código.


