import { useState } from "react";
import { Header, Sidebar } from "./components";

function App() {
  const [theme, setTheme] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className={`App${theme ? " dark" : ""}`}>
      <div
        className={`main ${
          toggleSidebar && "on-blur"
        } dark:bg-dark-blue h-screen`}
      >
        <Header
          theme={theme}
          setTheme={setTheme}
          setToggleSidebar={setToggleSidebar}
        />
      </div>
      {toggleSidebar && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
      )}
    </div>
  );
}

export default App;
