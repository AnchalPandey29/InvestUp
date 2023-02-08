import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import UserAuth from "./auth/UserAuth";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import AddAdmin from "./components/main/AddAdmin";
import Contact from "./components/main/Contact";
import About from "./components/main/About";
import AddCompaign from "./components/admin/AddCampaign";
import AddNews from "./components/admin/AddNews";
import AddBlog from "./components/admin/AddBlog";
import ManageCompaign from "./components/admin/ManageCampaign"
import ManageNews from "./components/admin/ManageNews";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
              <Route element={<AddCompaign />} path="addcampaign" />
              <Route element={<AddNews />} path="addnews" />
              <Route element={<AddBlog />} path="addblog" />
              <Route element={<ManageCompaign />} path="managecompaign" />
              <Route element={<ManageNews/>} path="managenews"/>
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<Signin />} path="login" />
              <Route element={<Signup />} path="signup" />
              <Route element={<About />} path="aboutus" />
              <Route element={<Contact />} path="contact" />
            </Route>

            <Route
              element={
                // <UserAuth>
                // </UserAuth>
                <User />
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="addadmin" element={<AddAdmin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
