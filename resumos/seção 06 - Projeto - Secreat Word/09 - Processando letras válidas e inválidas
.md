# Processando letras válidas e inválidas

## Resumo

###### App.jsx

```jsx
...
/*  process the letter input */
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return
    }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLeter((actualGuessedLetter) => [
        ...actualGuessedLetter,
        normalizedLetter
      ])}else{
        setWrongLetters((actualWrongLetters)=>[
          ...actualWrongLetters,
          normalizedLetter
        ])
      }
    }
...
```

No começo da função normaliza a letra recebida por parâmetro, verifica se as letras já foram  digitadas anteriormente pelo usuário verificando se estão incluídas nos arrays `guessedLetters` e `wrongLetters`, caso estejam incluídas a função retorna `return early`.

Se passou na verificação acima é adicionado as letras nos arrays devidos de palavras certas ou erradas.


