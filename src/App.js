import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/DashboardPage";
import Footer from "./components/Footer";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
import "react-toastify/dist/ReactToastify.min.css";

const FetchedContext = createContext();
function App() {

  const [tasks, setTasks] = useState([]);
  console.log("Tasks of States:", tasks);

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
        console.log("Data From API:", data);
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

  const deleteTask = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    let updatedTask = tasks.filter((task)=>task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    setTasks(JSON.parse(localStorage.getItem('tasks')))
    console.log("Delted");
  };

  const editTask = ()=>{
    
  }

  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (tasks) {
      const completed = tasks.filter((task) => task.completed === true);
      const pending = tasks.filter((task) => task.completed !== true);

      setCompleted(completed);
      setPending(pending);

      // console.log("Pending:",pending);
      // console.log("Completed:", completed);
    }
  }, [tasks]);

    const notify = (msg,type) => {
      console.log("Show Notification!");
      if(type==="success"){
        toast.success(msg);
      }else{
        toast.error(msg);
      }
    }
  return (
    <FetchedContext.Provider
      value={{
        tasks,
        setTasks,
        pending,
        setPending,
        completed,
        setCompleted,
        deleteTask,notify
      }}
    >
      <div className="App">
      <ToastContainer />
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
