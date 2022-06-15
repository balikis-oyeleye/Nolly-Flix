import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useMovieContext } from "./context/movieContext";
import { Header, Sidebar, PageRoutes, Loader } from "./components";

function App() {
  const { isLoading } = useMovieContext();

  const [theme, setTheme] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <BrowserRouter>
      <div className={`App${theme ? " dark" : ""} h-screen`}>
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
          {isLoading ? <Loader /> : <PageRoutes />}
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
