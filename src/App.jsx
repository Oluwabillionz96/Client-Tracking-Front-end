import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
/***********Pages *********/
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import Prospect from "./Pages/Prospects/Prospect";
import Schedule from "./Pages/Schedule/Schedule";
import Project from "./Pages/Project/Project";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

// Layout
import RootLayout from "./Layout/RootLayout";
import DashBoardLayout from "./Layout/DashBoardLayout";
import "./App.css";

function App() {
  const routes = createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Login />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot" element={<ForgotPassword />}/>
        <Route path='dashboard' element={<DashBoardLayout />}>
          <Route index element={<Dashboard />}/>
            <Route path="not-found" element={<NotFound />} />
            <Route path="project" element={<Project />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="prospect" element={<Prospect/>} />
            <Route path="profile" element={<Profile/>} />
            
          
        </Route>
      
    </Route>
  );
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
