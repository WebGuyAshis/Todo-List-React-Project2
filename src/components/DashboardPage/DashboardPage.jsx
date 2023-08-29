import React, { useState, createContext} from "react";
import './DashboardPage.styles.css'
import DashNav from "./DashNav/DashNav";
import DashboardContainer from "./DashboardContainer";
import TasksContainer from "./TasksContainer";
import UserAccount from "./UserAccount";

const DashContext = createContext();

const DashboardPage = () =>{
    // const [page, setPage] = useState(<DashboardContainer/>)
    const [isDash, setIsDash] = useState(true);
    console.log("Dash Inside Dashboard Page", isDash);
    return(
        <DashContext.Provider value={{isDash,setIsDash}}>
            <div className="dashboard-page"> 
            <DashNav/>
            {isDash ?<DashboardContainer/>:<TasksContainer/> }
            <UserAccount/>
        </div>
        </DashContext.Provider>
    )
}

export {DashContext};
export default DashboardPage;