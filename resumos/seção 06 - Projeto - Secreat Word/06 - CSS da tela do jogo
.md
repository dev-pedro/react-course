# CSS da tela do jogo

## Resumo

Estilos da tela do jogo.

###### CSS:

```css
.game h1 {
  font-size: 2.5rem;
}

.points span {
  font-weight: bold;
}

.tip span {
  color: #ecfa00;
}

.word-container {
  margin: 1.5em;
  padding: 1.5em;
  border: 25px solid #ecfa00;
  display: flex;
}

.letter,
.blank-square {
  font-size: 70px;
  line-height: 1.5;
  border: 3px solid #000;
  width: 100px;
  height: 100px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;
}

.letter-container p {
  margin-bottom: 1.2em;
}

.letter-container form{
    display: flex;
    align-items: center;
    justify-content: center;
} 

.letter-container input{
    width: 50px;
    height: 50px;
    font-size: 2em;
    text-align: center;
    margin-right: 1em;
    text-transform: uppercase;
}
```

###### Tela

![](./images/game-css.png)
