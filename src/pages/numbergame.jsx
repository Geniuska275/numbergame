import { useState } from 'react';

export default function NumberGuessingGame() {
  const [difficulty, setDifficulty] = useState(null);
  const [secretNumber, setSecretNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts, setMaxAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameStatus, setGameStatus] = useState('setup');
  const [guessHistory, setGuessHistory] = useState([]);
  const [shake, setShake] = useState(false);
  const [pulse, setPulse] = useState(false);

  const difficulties = {
    easy: { name: 'Easy', attempts: 15, color: 'bg-green-500' },
    medium: { name: 'Medium', attempts: 10, color: 'bg-yellow-500' },
    hard: { name: 'Hard', attempts: 5, color: 'bg-red-500' }
  };

  const startGame = (level) => {
    const max = difficulties[level].attempts;
    setDifficulty(level);
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setMaxAttempts(max);
    setAttempts(0);
    setGuess('');
    setFeedback('');
    setGameStatus('playing');
    setGuessHistory([]);
    setPulse(false);
  };

  const resetGame = () => {
    setDifficulty(null);
    setSecretNumber(null);
    setGuess('');
    setAttempts(0);
    setMaxAttempts(0);
    setFeedback('');
    setGameStatus('setup');
    setGuessHistory([]);
    setPulse(false);
  };

  const handleGuess = () => {
    const guessNum = parseInt(guess);
    
    if (guess === '' || isNaN(guessNum)) {
      setFeedback('⚠️ Please enter a valid number!');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    
    if (guessNum < 1 || guessNum > 100) {
      setFeedback('⚠️ Please enter a number between 1 and 100!');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setGuessHistory([...guessHistory, guessNum]);

    if (guessNum === secretNumber) {
      setFeedback('🎉 Correct! You won!');
      setGameStatus('won');
      setPulse(true);
    } else if (newAttempts >= maxAttempts) {
      setFeedback(`💀 Game Over! The number was ${secretNumber}`);
      setGameStatus('lost');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      const difference = Math.abs(guessNum - secretNumber);
      let hint = '';
      
      if (difference <= 5) {
        hint = '🔥 Very close! ';
      } else if (difference <= 10) {
        hint = '😊 Close! ';
      } else if (difference <= 20) {
        hint = '🤔 Getting warmer... ';
      }
      
      if (guessNum < secretNumber) {
        setFeedback(`${hint}⬆️ Too low! Try higher.`);
      } else {
        setFeedback(`${hint}⬇️ Too high! Try lower.`);
      }
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    
    setGuess('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && gameStatus === 'playing') {
      handleGuess();
    }
  };

  if (gameStatus === 'setup') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">✨</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Number Guessing Game</h1>
            <p className="text-gray-600">I'm thinking of a number between 1 and 100...</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Choose Difficulty</h2>
            {Object.entries(difficulties).map(([key, value]) => (
              <button
                key={key}
                onClick={() => startGame(key)}
                className={`w-full ${value.color} hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                {value.name} - {value.attempts} attempts
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>

        <h1 className='font-bold text-white'>KINGSLEY AIGBOJIE'S SUBMISSION</h1>
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full ${shake ? 'animate-shake' : ''} ${pulse ? 'animate-pulse' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${difficulties[difficulty].color}`}></div>
            <span className="font-semibold text-gray-700">{difficulties[difficulty].name}</span>
          </div>
          <button
            onClick={resetGame}
            className="text-gray-500 hover:text-gray-700 transition-colors text-2xl"
            title="Change Difficulty"
            >
            🔄
          </button>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🎯 Guess the Number!</h1>
          <p className="text-gray-600">Between 1 and 100</p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-semibold">Attempts Left:</span>
            <span className="text-2xl font-bold text-purple-600">
              {maxAttempts - attempts}
            </span>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                  (maxAttempts - attempts) / maxAttempts > 0.5
                  ? 'bg-green-500'
                  : (maxAttempts - attempts) / maxAttempts > 0.25
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
                }`}
                style={{ width: `${((maxAttempts - attempts) / maxAttempts) * 100}%` }}
                ></div>
          </div>
        </div>

        {gameStatus === 'playing' && (
            <div className="mb-6">
            <div className="flex gap-2">
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your guess"
                className="flex-1 px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
                min="1"
                max="100"
                autoFocus
                />
              <button
                onClick={handleGuess}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                Guess
              </button>
            </div>
          </div>
        )}

        {feedback && (
            <div className={`p-4 rounded-lg mb-6 text-center font-semibold text-lg ${
                gameStatus === 'won'
                ? 'bg-green-100 text-green-700 animate-bounce'
                : gameStatus === 'lost'
                ? 'bg-red-100 text-red-700'
                : 'bg-blue-100 text-blue-700'
            }`}>
            {feedback}
          </div>
        )}

        {(gameStatus === 'won' || gameStatus === 'lost') && (
            <div className="text-center space-y-4">
            <div className="text-8xl">
              {gameStatus === 'won' ? '🏆' : '❌'}
            </div>
            
            <button
              onClick={() => startGame(difficulty)}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
              🎮 Play Again
            </button>
            
            <button
              onClick={resetGame}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              🔄 Change Difficulty
            </button>
          </div>
        )}

        {guessHistory.length > 0 && gameStatus === 'playing' && (
            <div className="mt-6 border-t pt-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">📝 Your Guesses:</h3>
            <div className="flex flex-wrap gap-2">
              {guessHistory.map((g, i) => (
                  <span
                  key={i}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                  {g}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
            }
            .animate-shake {
                animation: shake 0.5s;
                }
                `}</style>
    </div>
                </div>
  );
}