import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
