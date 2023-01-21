import React, { createContext, useState } from "react";
import QuestionPaper from "./view/QuestionPaper/QuestionPaper";

interface CurrentIndexState {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentIndexContext = createContext<CurrentIndexState>({
  currentIndex: 0,
  setCurrentIndex: (a) => {},
});

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <CurrentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
        <QuestionPaper />
      </CurrentIndexContext.Provider>
    </div>
  );
}

export default App;
