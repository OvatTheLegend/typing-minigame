type WordDisplayProps = {
    words: string[];
    typedHistory: string[];
    currentWordIndex: number;
    userInput: string;
};

export default function WordDisplay({
    words,
    typedHistory,
    currentWordIndex,
    userInput,
}: WordDisplayProps) {

    const getCharClassName = (
        wordIndex: number,
        charIndex: number,
        char: string,
    ) => {
        // 1. Past words: check actual typed history
        if (wordIndex < currentWordIndex) {
            const typedWord = typedHistory[wordIndex] || "";
            if (charIndex < typedWord.length) {
                return typedWord[charIndex] === char
                    ? "text-emerald-500 font-medium"
                    : "text-rose-500 bg-rose-500/10 underline decoration-rose-500";
            }
            return "text-rose-500/50"; // Missed character
        }

        // 2. Future words: not reached yet
        if (wordIndex > currentWordIndex) {
            return "text-zinc-600";
        }

        // 3. Current active word: already typed letters
        if (charIndex < userInput.length) {
            return userInput[charIndex] === char
                ? "text-emerald-400 font-medium"
                : "text-rose-500 bg-rose-500/10 underline decoration-rose-500";
        }

        // 4. Current active character (the exact letter the cursor is on)
        if (charIndex === userInput.length) {
            return "text-zinc-100 bg-zinc-800 rounded px-0.5";
        }

        // 5. Remaining untyped letters in active word
        return "text-zinc-600";
    };

    return (
        <div className="w-full min-h-[140px] p-6 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-wrap gap-x-3 gap-y-2 text-xl md:text-2xl font-mono leading-relaxed select-none tracking-wide">
            {words.map((word, wordIndex) => 
                <div
                    key={wordIndex}
                    className="relative flex"    
                >
                    {word.split("").map((char, charIndex) => 
                    <span
                        key={charIndex}
                        className={getCharClassName(wordIndex, charIndex, char)}>
                        {char}
                    </span>)}
                </div>)}
        </div>
    );
}
