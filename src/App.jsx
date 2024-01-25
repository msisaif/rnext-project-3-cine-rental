import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./contexts/ThemeContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-white text-dark dark:bg-body dark:text-white">
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <Page />
          <ToastContainer
            position="bottom-right"
            theme={isDarkMode ? "dark" : "light"}
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
