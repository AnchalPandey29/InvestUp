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
import FaqQuery from "./components/main/FaqQuery";
import FaqStartup from "./components/main/FaqStartup";
import FaqInvestor from "./components/main/FaqInvestor";
import FaqEligibility from "./components/main/FaqEligibility";
import FaqProcess from "./components/main/FaqProcess";
import FaqOther from "./components/main/FaqOther";

import UserAuth from "./auth/UserAuth";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import AddAdmin from "./components/admin/AddAdmin";
import Contact from "./components/main/Contact";
import About from "./components/main/About";
import Faq from "./components/main/Faq";
import Testimonial from "./components/main/Testimonial";
import AddCompaign from "./components/admin/AddCampaign";
import AddNews from "./components/admin/AddNews";
import StartupChat from "./components/startup/Chat";

import AddBlog from "./components/admin/AddBlog";
import ManageCompaign from "./components/admin/ManageCampaign";
import ManageNews from "./components/admin/ManageNews";
import ManageBlog from "./components/admin/ManageBlog";
import ManageStartup from "./components/admin/ManageStartup";
import ManageInvestor from "./components/admin/ManageInvestor";
import ManageContact from "./components/admin/ManageContact";

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
import InvestorList from "./components/investor/InvestorList";
import InvestorDetails from "./components/investor/InvestorDetails";
import StartupDashboard from "./components/startup/Dashboard";
import chatlist from "./components/investor/Dashboard";

// import StartupDashboardContainer from "./components/startup/DashboardContainer";
import InvestorChat from "./components/investor/Chat";
import Checkout from "./components/startup/Checkout";
import LoginAuth from "./auth/LoginAuth";
import StartupProvider from "./context/StartupProvider";
import StartupProfile from "./components/startup/StartupProfile";
import StartupAuth from "./auth/StartupAuth";
import InvestorDashboard from "./components/investor/Dashboard";
import Auth from "./auth/Auth";
import PlanDetails from "./components/investor/PlanDetails";
import InvestorAuth from "./auth/InvestorAuth";
import InvestorProvider from "./context/InvestorProvider";
import StartupInbox from "./components/startup/StartupInbox";
function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  const [currentStartup, setCurrentStartup] = useState(
    JSON.parse(sessionStorage.getItem("startup"))
  );

  const [currentInvestor, setCurrentInvestor] = useState(
    JSON.parse(sessionStorage.getItem("investor"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <StartupProvider currentStartup={currentStartup}>
            <InvestorProvider currentStartup={currentInvestor}>
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
                  <Route element={<AddAdmin />} path="addadmin" />
                  <Route element={<AdminProfile />} path="profile" />
                  <Route element={<AddCompaign />} path="addcampaign" />
                  <Route element={<AddNews />} path="addnews" />
                  <Route element={<AddBlog />} path="addblog" />
                  <Route element={<ManageCompaign />} path="managecampaign" />
                  <Route element={<ManageNews />} path="managenews" />
                  <Route element={<ManageBlog />} path="manageblog" />
                  <Route element={<ManageStartup />} path="managestartup" />
                  <Route element={<ManageInvestor />} path="manageinvestor" />
                  <Route element={<ManageContact />} path="managecontact" />
                </Route>

                <Route element={<Main />} path="main">
                  <Route element={<Checkout />} path="checkout/:sessionid" />
                  <Route element={<Home />} path="home" />
                  <Route element={<Forgot />} path="forgot" />
                  <Route
                    element={
                      <LoginAuth>
                        <Signin />
                      </LoginAuth>
                    }
                    path="login"
                  />
                  <Route element={<Option />} path="option" />
                  <Route element={<Signup />} path="signup" />
                  <Route element={<About />} path="aboutus" />
                  <Route element={<Eligible />} path="Eligible" />
                  <Route element={<Subscription />} path="subscription" />
                  <Route element={<NewsDetail />} path="newsdetail/:id" />
                  <Route
                    element={<CampaignDetail />}
                    path="campaigndetails/:id"
                  />
                  <Route element={<BlogDetail />} path="blogdetails/:id" />
                  <Route element={<ConsultancyCard />} path="consultancy" />
                  <Route element={<Consultancy />} path="chat" />
                  <Route element={<Contact />} path="contact" />
                  <Route element={<Testimonial />} path="test" />
                  <Route element={<Faq />} path="faq" />
                  <Route element={<FaqQuery />} path="query" />
                  <Route element={<FaqStartup />} path="faqstartup" />
                  <Route element={<FaqInvestor />} path="faqinvestor" />
                  <Route element={<FaqEligibility />} path="faqeligibilty" />
                  <Route element={<FaqProcess />} path="faqprocess" />
                  <Route element={<FaqOther />} path="faqother" />
                  <Route element={<NewsBrowser />} path="newsbrowser" />
                  <Route element={<BlogBrowser />} path="blogbrowser" />
                  <Route element={<CampaignBrowser />} path="campaignbrowser" />
                  <Route
                    element={
                      <Auth>
                        <StartupList />
                      </Auth>
                    }
                    path="startuplist"
                  />

                  <Route
                    element={
                      <Auth>
                        <StartupDetails />
                      </Auth>
                    }
                    path="startupdetails/:id"
                  />

                  <Route
                    element={
                      <Auth>
                        <InvestorList />
                      </Auth>
                    }
                    path="investorlist"
                  />

                  <Route
                    element={
                      <Auth>
                        <InvestorDetails />
                      </Auth>
                    }
                    path="investordetails/:id"
                  />
                </Route>

                <Route
                  element={
                    <StartupAuth>
                      <Startup />
                    </StartupAuth>
                  }
                  path="startup"
                >
                  <Route element={<StartupDashboard />} path="dashboard" />
                  <Route element={<Register />} path="register" />
                  {/* <Route element={<StartupDashboardContainer />} path="dashboard" /> */}
                  <Route element={<StartupChat />} path="chat/:investorid" />
                  <Route element={<StartupInbox />} path="inbox" />
                  <Route element={<StartupProfile />} path="startupprofile" />
                  <Route element={<Register />} path="profile" />
                </Route>
                <Route
                  element={
                    <InvestorAuth>
                      <Investor />
                    </InvestorAuth>
                  }
                  path="investor"
                >
                  <Route element={<InvestorDashboard />} path="dashboard" />

                  <Route element={<chatlist />} path="chatlist" />
                  <Route element={<InvestorChat />} path="chat/:startupid" />
                  <Route element={<Registerinvestor />} path="profile" />
                  <Route element={<PlanDetails />} path="plan" />
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
            </InvestorProvider>
          </StartupProvider>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
