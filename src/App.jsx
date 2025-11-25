import { Routes,Route } from "react-router-dom"
import Login from "./Auth/Login"
import SignUp from "./Auth/SignUp"
import VerifyEmail from "./Auth/VerifyEmail"
import Verify from "./Auth/Verify"
import Home from "./Home"
import DashBoard from "./DashBoard"
import NavBar from "./NavBar"
import Resume from "./Resume/Resume"
import Forgot from "./Auth/Forgot"
import Otp from "./Auth/Otp"
import ChangePass from "./Auth/ChangePass"
import { useSelector } from "react-redux"
import Notification from "./Notification"
import PrivateRoute from "./PrivateRoute"
import Public from "./Public"
import NonNavLayout from "./Layout/NonNavLayout"
import MainLayout from "./Layout/MainLayout"
import NotFound from "./NotFound"


function App() {

  const token = useSelector((state) => state.auth.user?.token);
 
  return (
   
      <div>

       {token && <Notification/>}

        <Routes>
            
            <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
            
            <Route element={<Public/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/verifyEmail" element={<VerifyEmail/>}/>
            </Route>

            <Route path="/forgot" element={<Forgot/>}/>
            <Route path="/otp" element={<Otp/>}/>
            <Route path="/password" element={<ChangePass/>}/>

            <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="/resume" element={<Resume/>}/>

            <Route path="*" element={<NotFound/>}/>
            </Route>

            </Route>

            <Route element={<NonNavLayout/>}>
            <Route path="/verify" element={<Verify/>}/>
          </Route>


        </Routes>


      </div>
    
  )
}

export default App
