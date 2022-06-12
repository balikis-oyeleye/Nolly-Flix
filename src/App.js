import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Sidebar, PageRoutes } from "./components";

function App() {
  const [theme, setTheme] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <BrowserRouter>
      <div className={`App${theme ? " dark" : ""}`}>
        <main
          className={`main ${
            toggleSidebar && "on-blur"
          } dark:bg-dark-blue h-screen`}
        >
          <Header
            theme={theme}
            setTheme={setTheme}
            setToggleSidebar={setToggleSidebar}
          />
          <PageRoutes />
        </main>
        {toggleSidebar && (
          <Sidebar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
