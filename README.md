#  Terminal Velocity (Speed Typing Mini-App)

> A fast-paced, retro hacker-themed terminal speed typing test built with modern **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

![License](https://img.shields.io/badge/license-MIT-emerald.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg)

---

##  Game Overview & Features

- ** Retro Hacker Terminal Aesthetic**: Dark monospace theme, neon emerald accents, and subtle glowing borders.
- ** Custom `useReducer` State Machine**: Deterministic game engine handling transitions between `IDLE`, `TYPING`, and `FINISHED` states across actions (`TYPE_CHAR`, `BACKSPACE`, `TICK_TIMER`, `SET_DURATION`, `RESTART`).
- ** Real-time HUD Metrics**: Live countdown timer, live WPM (Words Per Minute), and live Accuracy %.
- ** Real-Time Character Feedback**:
  - `Emerald Green`: Successfully typed characters.
  - `Red with Underline`: Typos & mistakes.
  - `Muted Zinc`: Unreached characters.
  - `Gray Background Highlight`: Exact active character cursor tracking.
- ** Typed History Memory Tape**: Retains past word error history across space submissions, enabling smooth multi-word backspacing.
- ** Duration Config**: Choose between `15s`, `30s`, and `60s` test modes.
- ** Results Screen**: Summary metric cards for Net WPM, Accuracy %, Raw CPM (Characters Per Minute), and Error count with a quick restart action.

---

##  Standard Typing Formulas

- **Words Per Minute (WPM)**:
  $$\text{WPM} = \frac{(\text{Correct Characters} / 5)}{\text{Time Elapsed in Minutes}}$$
- **Accuracy (%)**:
  $$\text{Accuracy} = \frac{\text{Correct Characters}}{\text{Total Typed Characters}} \times 100$$
- **Characters Per Minute (CPM)**:
  $$\text{CPM} = \frac{\text{Total Typed Characters}}{\text{Time Elapsed in Minutes}}$$

---

##  Architecture & Concepts Mastered

- **Framework**: Next.js App Router
- **Component Separation**:
  - `TypingHeader.tsx`: Mode selectors, logo, and live stats HUD.
  - `WordDisplay.tsx`: Word stream rendering, character color-coding, and cursor tracking.
  - `ResultScreen.tsx`: 2x2 metric cards and test restart.
  - `types.ts`: Discriminated action unions, game status, and state models.
  - `words.ts`: Tech-themed word bank and randomizer utility.
- **React Hooks**:
  - `useReducer`: Full game logic and immutable state transitions.
  - `useEffect`: Window `keydown` event listeners and interval countdown timers with cleanups.

---

##  Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OvatTheLegend/speed-type.git
   cd speed-type
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000/typing](http://localhost:3000/typing) in your browser.

---

##  Author

- **Richard** — [@OvatTheLegend](https://github.com/OvatTheLegend)
- Student @ **FEI STU** (Slovak University of Technology in Bratislava)
