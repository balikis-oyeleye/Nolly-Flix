import { useState } from "react";
import { Header } from "./components";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={`App${theme ? " dark" : ""}`}>
      <div className="main dark:bg-dark-blue h-screen">
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
