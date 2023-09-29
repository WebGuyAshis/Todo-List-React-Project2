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
import About from "./components/About";

const FetchedContext = createContext();

function App() {

  const [tasks, setTasks] = useState([]);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [descriptionData, setDescriptionData] = useState({})

  // Showing UserAccount and Notification
  const [openUserAccount, setOpenUserAccount] = useState(false);

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
        // console.log("Data From API:", data);
        setTasks(data);
        setDataToLocalStorage(data);
      } catch (error) {
        notify("Error Fetching Tasks from API!", "error")
        console.log("Error Fetching Tasks!", error);
      }
    };

    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      console.log(storedTasks,"stored tasks", storedTasks.length);
    } else {
      fetchData();
    }
  }, []);


  // Deleting Task
  const deleteTask = (id) => {
    console.log("Delete Task");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
    let updatedTask = tasks.filter((task)=>task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    setTasks(JSON.parse(localStorage.getItem('tasks')))
    console.log("Deleted");
    notify("Task Deleted SuccessFully!","success")
    isDescriptionOpen && setIsDescriptionOpen(false);
  };

  // const editTask = ()=>{
    
  // }

  // const [pending, setPending] = useState(0);
  // const [completed, setCompleted] = useState(0);

  // useEffect(() => {
  //   if (tasks) {
  //     const completed = tasks.filter((task) => task.completed === true);
  //     const pending = tasks.filter((task) => task.completed !== true);

  //     setCompleted(completed);
  //     setPending(pending);

  //     // console.log("Pending:",pending);
  //     // console.log("Completed:", completed);
  //   }
  // }, [tasks]);


    const showDescription = (id)=>{
      console.log("Description ID", id);
      console.log("Open Dessc");
      setIsDescriptionOpen(!isDescriptionOpen)
      const updatedDesc = tasks.find((task) => task.id === id);
      setDescriptionData(updatedDesc)
      console.log("Description Data:", descriptionData);
    }


    const notify = (msg,type) => {
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
        deleteTask,
        isDescriptionOpen, 
        setIsDescriptionOpen,
        showDescription,
        descriptionData,
        setDescriptionData,
        notify,
        openUserAccount,
        setOpenUserAccount
      }}
    >
      <div className="App">
      <ToastContainer />
        {/* <Home/> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Router>
        <Footer />
      </div>
    </FetchedContext.Provider>
  );
}

export default App;
export { FetchedContext };
