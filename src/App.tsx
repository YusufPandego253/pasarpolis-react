import { useState } from "react";
import "./App.css";

export default function App() {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState<any>(0);
  const [attempt, setAttempt] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [showReset, setShowReset] = useState<boolean>(false);

  const handleGuess = (e: any) => {
    e.preventDefault();
    setAttempt(attempt + 1);
    if (guess < secretNumber) {
      setMessage("Too low! Try again.");
    } else if (guess > secretNumber) {
      setMessage("Too high! Try again.");
    } else {
      setMessage(
        `Congratulations! You guessed the number ${guess} in ${attempt} attempts.`
      );
      setGuess(guess);
      setShowReset(true);
    }
  };

  const handleReset = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setAttempt(0);
    setGuess(0);
    setMessage("");
    setShowReset(false);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Enter your guess:</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          min="1"
          max="100"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
      {showReset && <button onClick={handleReset}>Reset Game</button>}
    </div>
  );
}
