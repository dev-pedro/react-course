# Lendo e Adicionando Dados na API

## Resumo

## Enviando os Dados da API

```javascript
 //add products
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    const res = await fetch (url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)

    })

    console.log(await res.json())
  }
```

Para enviar dados para uma API usando a função `fetch` e o método HTTP POST. Aqui está uma explicação passo a passo do que o código faz:

1. O evento `e.preventDefault()` é chamado para evitar que o formulário seja enviado da maneira tradicional (recarregando a página) quando o formulário é submetido.

2. Um objeto `product` é criado com os dados que você deseja enviar para a API. Neste caso, parece que você está enviando um produto com um nome (`name`) e um preço (`price`).

3. A função `fetch` é usada para fazer a solicitação HTTP POST para a URL especificada (`url`) com as seguintes configurações:
   
   - `method: 'POST'`: Indica que você está fazendo uma solicitação POST.
   - `headers`: Define os cabeçalhos da solicitação, especificando que você está enviando dados JSON.
   - `body`: Converte o objeto `product` em uma string JSON usando `JSON.stringify` e a coloca no corpo da solicitação.

4. A resposta da API é armazenada na variável `res`.

5. `await res.json()` é usado para aguardar a resposta da API e extrair os dados JSON dela.

6. Os dados JSON são registrados no console.

Aparentemente, seu código está configurado corretamente para enviar os dados para a API usando o método POST e lidar com a resposta JSON da API. Certifique-se de que as variáveis `name`, `price`, e `url` estejam definidas corretamente e que a API esteja configurada para lidar com solicitações POST no endpoint especificado (`url`).

## Lendo os Dados da API

O hook `useEffect` para fazer uma solicitação GET a uma API (assumindo que a variável `url` esteja definida corretamente) quando o componente é montado. Vou explicar o que está acontecendo passo a passo:

1. Você define um `useEffect` que possui uma função `fetchData` assíncrona.

2. Dentro da função `fetchData`, você usa `fetch` para fazer uma solicitação GET para a URL especificada (`url`).

3. Você aguarda a resposta da API usando `await res.json()`. Isso converte os dados da resposta em um objeto JavaScript.

4. Os dados da API são definidos no estado usando `setProducts(data)`. Presumivelmente, `setProducts` é uma função de estado que atualiza o estado com os dados obtidos da API.

5. O `useEffect` é configurado com um array de dependências vazio (`[]`). Isso significa que a função `fetchData` só será executada uma vez, quando o componente for montado.

Dessa forma, quando o componente é montado, ele faz uma solicitação GET à API especificada, obtém os dados da API e atualiza o estado com esses dados, tornando-os disponíveis para serem usados em seu componente.

Certifique-se de que a variável `url` esteja definida corretamente para apontar para a API que você deseja acessar, e certifique-se de que a API esteja configurada para lidar com solicitações GET no endpoint especificado (`url`). Além disso, considere adicionar tratamento de erros à função `fetchData` para lidar com falhas na solicitação à API.  

```javascript
useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchData()
  }, [])
```


