import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartupContext = createContext();

const StartupProvider = ({children, currentStartup}) => {

    const [sLoggedIn, setSloggedIn] = useState(currentStartup!==null);
    const navigate= useNavigate();

    const logout = () => {
        sessionStorage.removeItem('startup');
        setSloggedIn(false);
        navigate('/main/login');
    }
    

    return <StartupContext.Provider value={{sLoggedIn, setSloggedIn, logout}}>
        {children}
    </StartupContext.Provider>
}

export const useStartupContext = () => useContext(StartupContext);

export default StartupProvider;
