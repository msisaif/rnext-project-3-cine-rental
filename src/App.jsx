import { useState } from "react";
import Page from "./Page";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-white text-dark dark:bg-body dark:text-white">
        <Page
          isDarkMode={isDarkMode}
          onChangeMode={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
    </div>
  );
}

export default App;
