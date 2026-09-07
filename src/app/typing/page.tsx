"use client"

import ResultScreen from "@/components/typing/ResultScreen";
import { Action, GameState } from "@/components/typing/types";
import TypingHeader from "@/components/typing/TypingHeader";
import WordDisplay from "@/components/typing/WordDisplay";
import generateWords from "@/components/typing/words";
import { useReducer, useEffect } from "react";

const initialState: GameState = {
    status: "IDLE",
    duration: 30,
    timeRemaining: 30,
    words: [],
    typedHistory: [],
    currentWordIndex: 0,
    currentCharIndex: 0,
    userInput: "",
    correctChars: 0,
    incorrectChars: 0,
    totalTypedChars: 0,
}

function typingReducer(state: GameState, action: Action): GameState{
    switch (action.type){
      case "START_GAME":
        return {
          ...state,
          duration: 30,
          timeRemaining: 30,
          words: generateWords(),
          typedHistory: [],
          status: "IDLE",
          currentWordIndex: 0,
          currentCharIndex: 0,
          correctChars: 0,
          incorrectChars: 0,
          totalTypedChars: 0,
        };
      case "TYPE_CHAR":

        if (action.payload === " ") {
          if (state.userInput.length === 0) return state;
          
          return {
            ...state,
            typedHistory: [...state.typedHistory, state.userInput],
            currentWordIndex: state.currentWordIndex + 1,
            userInput: "",
            currentCharIndex: 0,
            totalTypedChars: state.totalTypedChars + 1,
          };
        }
        
        const currentWord = state.words[state.currentWordIndex] || "";
        const targetChar = currentWord[state.userInput.length];
        const isCorrect = action.payload === targetChar;
        return {
          ...state,
          status: "TYPING",
          userInput: state.userInput + action.payload,
          currentCharIndex: state.currentCharIndex + 1,
          correctChars: isCorrect ? state.correctChars + 1 : state.correctChars,
          incorrectChars: !isCorrect ? state.incorrectChars + 1 : state.incorrectChars,
          totalTypedChars: state.totalTypedChars + 1,
        };
      case "BACKSPACE":
        if (state.userInput.length > 0) {
          const userInput = state.userInput.slice(0, -1);
          const currentCharIndex = Math.max(0, state.currentCharIndex - 1);

          return {
            ...state,
            userInput: userInput,
            currentCharIndex: currentCharIndex,
          };
        }

        if (state.userInput.length === 0 && state.currentWordIndex > 0) {
          const prevWord = state.typedHistory[state.typedHistory.length - 1] || "";
          return {
            ...state,
            currentWordIndex: state.currentWordIndex - 1,
            userInput: prevWord,
            typedHistory: state.typedHistory.slice(0, -1),
            currentCharIndex: prevWord.length,
          };
        }

        return state;
      case "TICK_TIMER":
        if (state.timeRemaining > 1){
          return {
            ...state,
            timeRemaining: state.timeRemaining - 1
          }
        } 
        return {
          ...state,
          status: "FINISHED",
          timeRemaining: 0,
        }
      case "SET_DURATION":
        return {
          ...state,
          duration: action.payload,
          timeRemaining: action.payload, 
        }
      case "RESTART":
        return {
          ...state,
          words: generateWords(),
          typedHistory: [],
          status: "IDLE",
          timeRemaining: state.duration,
          userInput: "",
          currentWordIndex: 0,
          currentCharIndex: 0,
          correctChars: 0,
          incorrectChars: 0,
          totalTypedChars: 0,
        };
      default:
        return state;
    }
}

export default function TypingPage() {
  
  const [state, dispatch] = useReducer(typingReducer, initialState);
  const timeElapsed = state.duration - state.timeRemaining;
  const minutesElapsed = timeElapsed / 60;

  const liveWpm = timeElapsed > 0 
    ? Math.round((state.correctChars / 5) / minutesElapsed)
    : 0;

  const liveAccuracy = state.totalTypedChars > 0
    ? Math.round((state.correctChars / state.totalTypedChars) * 100)
    : 100

  const rawCpm = timeElapsed > 0
    ? Math.round(state.totalTypedChars / minutesElapsed)
    : 0

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (state.status === "FINISHED") return;

      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (['Shift', 'CapsLock', 'Tab', 'Escape'].includes(e.key)) return;
    
      if (e.key === ' ') {
        e.preventDefault();
      }         
      
      if (e.key === "Backspace") {
        dispatch( {type: "BACKSPACE"});
      } else if (e.key.length === 1){
        dispatch({type: "TYPE_CHAR", payload: e.key})
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.status])

  useEffect(() => {
    dispatch( { type: "RESTART" });
  }, [])

  useEffect(() => {
    if (state.status !== "TYPING") return;

    const interval = setInterval(() => {
      dispatch( {type: "TICK_TIMER"})
    },1000)

    return () => {
      clearInterval(interval);
    }
  }, [state.status])
  return (
    /* MAIN FULLSCREEN WRAPPER */
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono flex flex-col items-center justify-center p-4 md:p-8 selection:bg-emerald-500 selection:text-black">
      {/* CENTRAL CARD CONTAINER */}
      <div className="w-full max-w-4xl flex flex-col gap-8 p-6 md:p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 shadow-2xl backdrop-blur-sm">
        {/* Child components (Header, WordDisplay / Results) will go here */}
        <TypingHeader
        timeRemaining={state.timeRemaining}
        wpm={liveWpm}
        accuracy={liveAccuracy}
        duration={state.duration}
        status={state.status}
        onSelectDuration={(d) => dispatch({type: "SET_DURATION", payload: d})}
        />


        {state.status === "FINISHED" 
          ? <ResultScreen
            wpm={liveWpm}
            accuracy={liveAccuracy}
            cpm={rawCpm}
            errors={state.incorrectChars}
            onRestart={() => dispatch({ type: "RESTART"})}
          />
          : <WordDisplay
            words={state.words}
            typedHistory={state.typedHistory}
            currentWordIndex={state.currentWordIndex}
            userInput={state.userInput}
            />
        }
      </div>
    </main>
  );
}