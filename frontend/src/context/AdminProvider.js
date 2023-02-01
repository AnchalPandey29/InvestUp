import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

const AdminProvider = ({ children, currentAdmin }) => {
  const [loggedIn, setLoggedIn] = useState(currentAdmin !== null);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("admin");
    setLoggedIn(false);
    navigate("/main/signin");
  };

  return (
    <AdminContext.Provider value={{ loggedIn, setLoggedIn, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);

export default AdminProvider;
