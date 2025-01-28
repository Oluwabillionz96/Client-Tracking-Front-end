import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import Prospects from "./Pages/Prospects/Prospects";
import Schedule from "./Pages/Schedule/Schedule";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Projects from "./Pages/Projects/Projects";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

import RootLayout from "./Layouts/RootLayout";
import DashBoardLayout from "./Layouts/DashBoardLayout";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "forgot", element: <ForgotPassword /> },
        {
          path: "dashboard",
          element: <DashBoardLayout />,
          children: [
            { index: true, element: <Dashboard /> },
            { path: "project", element: <Projects /> },
            { path: "schedule", element: <Schedule /> },
            { path: "prospects", element: <Prospects /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
