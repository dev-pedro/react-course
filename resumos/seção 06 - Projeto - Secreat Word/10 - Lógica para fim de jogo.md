# Lógica para fim de jogo

## Resumo

App.jsx

```javascript
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
    if (letters.includes(normalizedLetter)) {
      setGuessedLeter((actualGuessedLetter) => [
        ...actualGuessedLetter,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuess((actualGuess) => setGuess(actualGuess - 1))
    }

    setAllLettersPlayed([...allLettersPlayed, normalizedLetter])
  }

  const clearLettersSates = () =>{
    setLetters([])
    setGuessedLeter([])
  }
 
  useEffect(()=>{
    if(guess <= 0){
      clearLettersSates()
      setGameStage(stages[2].name)
    }
  },[guess])
 
 

  /*  restarts the game */
  const restartGame = () => {
    setGuess(guessesQty)
    setGameStage(stages[0].name)
  }
...
```

A função `verifyLetter` é encarregada por verificar as letras que o usuário esta digitando, caso o as letras seja errada o numero de chance é atualizado, quando o numero de chances acaba o hook `useEfect` monitora o estado das chances restantes, assim que elas terminam a tela de game-over é exibida.


