import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
