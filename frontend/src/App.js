import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Startup from "./components/startup";
import Investor from "./components/investor";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";
import Option from "./components/main/Option";
import Forgot from "./components/main/Forgot";
import Home from "./components/main/Home";
import Eligible from "./components/main/Eligible";
import Subscription from "./components/main/Subscription";

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
import Faq from "./components/main/Faq";
import Testimonial from "./components/main/Testimonial";
import AddCompaign from "./components/admin/AddCampaign";
import AddNews from "./components/admin/AddNews";

import AddBlog from "./components/admin/AddBlog";
import ManageCompaign from "./components/admin/ManageCampaign";
import ManageNews from "./components/admin/ManageNews";
import ManageBlog from "./components/admin/ManageBlog";
import ManageStartup from "./components/admin/ManageStartup";
import ManageInvestor from "./components/admin/ManageInvestor";
import Chat from "./components/startup/Chat";
import Register from "./components/startup/Register";
import NewsDetail from "./components/main/NewsDetail";
import CampaignDetail from "./components/main/CampaignDetail";
import BlogDetail from "./components/main/BlogDetail";
import Registerinvestor from "./components/investor/Register";
import NewsBrowser from "./components/main/NewsBrowser";
import ConsultancyCard from "./components/main/ConsultancyCard";
import Consultancy from "./components/main/Consultancy";
import BlogBrowser from "./components/main/BlogBrowser";
import CampaignBrowser from "./components/main/CampaignBrowser";
import StartupList from "./components/startup/StartupList";
import StartupDetails from "./components/startup/StartupDetails";
//import Subscription from "./components/main/Subscription";
import InvestorList from "./components/investor/InvestorList";
import InvestorDetails from "./components/investor/InvestorDetails";
import Dashboard from "./components/startup/Dashboard";

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
              <Route element={<ManageNews />} path="managenews" />
              <Route element={<ManageBlog />} path="manageblog" />
              <Route element={<ManageStartup />} path="managestartup" />
              <Route element={<ManageInvestor />} path="manageinvestor" />
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<Forgot />} path="forgot" />
              <Route element={<Signin />} path="login" />
              <Route element={<Option />} path="option" />
              <Route element={<Signup />} path="signup" />
              <Route element={<About />} path="aboutus" />
              <Route element={<Eligible />} path="Eligible" />
              <Route element={<Subscription />} path="Subscription" />
              <Route element={<NewsDetail />} path="newsdetail/:id" />
              <Route element={<CampaignDetail />} path="campaigndetails/:id" />
              <Route element={<BlogDetail />} path="blogdetails/:id" />
              <Route element={<ConsultancyCard />} path="consultancy" />
              <Route element={<Consultancy />} path="chat" />
              <Route element={<Contact />} path="contact" />
              <Route element={<Testimonial />} path="test" />
              <Route element={<Faq />} path="faq" />
              <Route element={<NewsBrowser />} path="newsbrowser" />
              <Route element={<BlogBrowser />} path="blogbrowser" />
              <Route element={<CampaignBrowser />} path="campaignbrowser" />
              <Route element={<StartupList />} path="startuplist" />
              <Route element={<StartupDetails />} path="startupdetails/:id" />
            </Route>

          <Route element={<Startup />} path="startup">
            <Route element={<Chat />} path="chat"/>
            <Route element={<Dashboard />} path="dashboard"/>
            <Route element={<Register />} path="register"/>
              <Route element={<Chat />} path="chat" />
              <Route element={<Register />} path="profile" />
            </Route>

            <Route element={<Investor />} path="investor">
              <Route element={<Chat />} path="chat" />
              <Route element={<InvestorList />} path="investorlist" />
              <Route element={<InvestorDetails />} path="investordetails" />
              <Route element={<Registerinvestor />} path="profile" />
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
