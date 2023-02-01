import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({children, currentUser}) => {

    const [loggedIn, setLoggedIn] = useState(currentUser!==null);
    const navigate= useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/main/signin');
    }

    return <UserContext.Provider value={{loggedIn, setLoggedIn, logout}}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
