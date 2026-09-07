type ResultScreenProps = {
    wpm: number;
    accuracy: number;
    cpm: number;
    errors: number;
    onRestart: () => void;
}

export default function ResultScreen({
    wpm,
    accuracy,
    cpm,
    errors,
    onRestart,
}: ResultScreenProps) {
    return (
        /* WRAPPER */
        <div className="w-full flex flex-col items-center gap-8 p-6 md:p-8 rounded-xl bg-zinc-950/80 border border-zinc-800 font-mono">
            {/* HEADER */}
            <div className="flex flex-col items-center gap-1">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Session Status</span>
                <h2 className="text-xl md:text-2xl font-bold tracking-widest text-emerald-400 uppercase drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    SESSION TERMINATED
                </h2>
            </div>

            {/* 2x2 GRID METRICS */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                {/* NET WPM */}
                <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 gap-1">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        Net WPM
                    </span>
                    <span className="text-4xl font-extrabold text-emerald-400 tracking-tight">
                        {wpm}
                    </span>
                </div>

                {/* ACCURACY */}
                <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 gap-1">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        Accuracy
                    </span>
                    <span className="text-4xl font-extrabold text-zinc-100 tracking-tight">
                        {accuracy}%
                    </span>
                </div>

                {/* RAW CPM */}
                <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 gap-1">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        Raw CPM
                    </span>
                    <span className="text-4xl font-extrabold text-zinc-100 tracking-tight">
                        {cpm}
                    </span>
                </div>

                {/* ERRORS */}
                <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 gap-1">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        Errors
                    </span>
                    <span className="text-4xl font-extrabold text-rose-500 tracking-tight">
                        {errors}
                    </span>
                </div>
            </div>

            {/* RESTART BUTTON */}
            <button 
                onClick={onRestart}
                className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold tracking-wider transition-all duration-150 shadow-[0_0_20px_rgba(52,211,153,0.25)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] active:scale-95 cursor-pointer">
                🔁 RESTART TEST
            </button>
        </div>
    );
}