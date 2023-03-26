import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const InvestorContext = createContext();

const InvestorProvider = ({children, currentInvestor}) => {

    const [sLoggedIn, setSloggedIn] = useState(currentInvestor!==null);
    const navigate= useNavigate();

    const logout = () => {
        sessionStorage.removeItem('investor');
        setSloggedIn(false);
        navigate('/main/login');
    }
    

    return <InvestorContext.Provider value={{sLoggedIn, setSloggedIn, logout}}>
        {children}
    </InvestorContext.Provider>
}

export const useInvestorContext = () => useContext(InvestorContext);

export default InvestorProvider;
