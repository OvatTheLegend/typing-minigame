import { useEffect } from "react";
import { GameDuration, GameStatus } from "./types";

type TypingHeaderProps = {
    timeRemaining: number;
    wpm: number;
    accuracy: number;
    duration: GameDuration;
    status: GameStatus;
    onSelectDuration: (duration : GameDuration) => void;
}

export default function TypingHeader({
    timeRemaining,
    wpm,
    accuracy,
    duration,
    status,
    onSelectDuration,
}: TypingHeaderProps) {

    const DURATIONS: GameDuration[] = [15, 30, 60];
    
    return (
        /* HEADER WRAPPER */
        <div className="w-full flex flex-col gap-4 font-mono">
            
            {/* TERMINAL_VELOCITY [15s] [30s] [60s] */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    &gt;_ TERMINAL_VELOCITY
                </div>

                {/* SECONDS BUTTON CHOICE WRAPPER */}
                <div className="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-lg border border-zinc-800">
                    {DURATIONS.map((value, index) => 
                    <button 
                        key={index}
                        disabled={status === 'TYPING'}
                        onClick={() => {onSelectDuration(value)}}
                        className={`px-3 py-1 rounded text-xs font-semibold tracking-wider transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                            value === duration
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                        }`}>
                        {value}s
                    </button>)}  
                </div>
            </div>

            {/* TIME WPM ACCURACY */}
            <div className="flex items-center justify-between text-sm px-2 text-zinc-400">
                <span className="font-semibold text-emerald-400">
                    Time: {timeRemaining}s
                </span>

                <span className="font-semibold text-zinc-200">
                    WPM: {wpm}
                </span>

                <span className="font-semibold text-zinc-200">
                    ACCURACY: {accuracy}%
                </span>
            </div>
        </div>        
    )
}