import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/DashboardPage";
import Footer from "./components/Footer";

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
      <Footer/>
    </div>
  );
}

export default App;
