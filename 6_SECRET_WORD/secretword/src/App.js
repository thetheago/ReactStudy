//CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//Data
import { wordsList } from './data/words';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 5;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setletters] = useState([]);

  const [guessedLetters, setguessedLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [guesses, setguesses] = useState(guessesQty);
  const [score, setscore] = useState(0);

  const pickWordAndCategory = () => {
    //Pega os indices dos arrays (Nomes)
    const categories = Object.keys(words);
    //Pega uma categoria aleatorio
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //Pega uma palavra aleatoria da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    // console.log(category +"\n"+ word);

    return { category, word };
  }

  //start the game
  const startGame = () => {
    //clear all letters
    clearLetterStates();

    //pick word and pick category
    const { category, word } = pickWordAndCategory();

    //create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //fill states
    setPickedWord(word);
    setpickedCategory(category);
    setletters(wordLetters);

    setGameStage(stages[1].name);
  }

  //process the letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    //push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setguessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter]);

    } else {
      setwrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter]);
      setguesses((actualGuesses) => actualGuesses - 1);

    }

  };

  const clearLetterStates = () =>{

    setguessedLetters([]);
    setwrongLetters([]);

  }

  //check if loses the game
  useEffect(() => {
    

    if(guesses <= 0){
      setGameStage(stages[2].name);
      //reset all states
      clearLetterStates();
    }

  }, [guesses]);

  //check win condition
  useEffect(() => {

    //retorna sem letras repetidas
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if(guessedLetters.length === uniqueLetters.length){
      //add score
      setscore((actualScore) => actualScore + 100);

      // restart game with new word
      startGame();
    }

  }, [guessedLetters, letters, startGame]);

  //restart the game
  const retry = () => {
    setscore(0);
    setguesses(guessesQty);

    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
