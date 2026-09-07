export type GameStatus = 'IDLE' | 'TYPING' | 'FINISHED';

export type GameDuration = 15 | 30 | 60;

export type GameState = {
    status: GameStatus;
    duration: GameDuration;
    timeRemaining: number;
    words: string[];
    typedHistory: string[];
    currentWordIndex: number;
    currentCharIndex: number;
    userInput: string;
    correctChars: number;
    incorrectChars: number;
    totalTypedChars: number;
};

export type Action =
  | { type: 'START_GAME' }
  | { type: 'TYPE_CHAR'; payload: string }
  | { type: 'BACKSPACE' }
  | { type: 'TICK_TIMER' }
  | { type: 'SET_DURATION'; payload: GameDuration }
  | { type: 'RESTART' };