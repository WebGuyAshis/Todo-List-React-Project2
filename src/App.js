import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/DashboardPage";
import Footer from "./components/Footer";
import React from "react";

const FetchedContext = createContext();
function App() {
  const [tasks, setTasks] = useState();

  const setDataToLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTasks(data);
        setDataToLocalStorage(data);
      } catch (error) {
        console.log("Error Fetching Tasks!", error);
      }
    };

    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      fetchData();
    }
  }, []);

  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (tasks) {
      const completed = tasks.filter((task) => task.completed === true);
      const pending = tasks.filter((task) => task.completed !== true);

      setCompleted(completed);
      setPending(pending);

      console.log("Pending:",pending);
      console.log("Completed:", completed);
    }
  }, [tasks]);

  return (
    <FetchedContext.Provider
      value={{ tasks, setTasks, pending, setPending, completed, setCompleted }}
    >
      <div className="App">
        {/* <Home/> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </FetchedContext.Provider>
  );
}

export default App;
export { FetchedContext };
