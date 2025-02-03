import React from "react";
import DashBoardLayout from "./Layouts/DashBoardLayout";
import DashBoard from "./Pages/DashBoard/DashBoard";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import Projects from "./Pages/Projects/Projects";
import Prospects from "./Pages/Prospects/Prospects";
import Schedule from "./Pages/Schedule/Schedule";
import SignUP from "./Pages/SignUP/SignUP";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignUP />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="*" element={<NotFound />} />
        <Route element={<DashBoardLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/prospects" element={<Prospects />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
