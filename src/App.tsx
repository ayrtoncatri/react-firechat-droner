import { Route, Routes } from "react-router"
import RootLayout from "./layouts/RootLayout"
import PublicLayout from "./layouts/PublicLayout"
import AdminLayout from "./layouts/AdminLayout"
import AuthLayout from "./layouts/AuthLayout"
import HomePage from "./pages/public/HomePage"
import DashboardPage from "./pages/admin/DashboardPage"
import ProfilePage from "./pages/admin/ProfilePage"
import ChatPage from "./pages/admin/ChatPage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import NotFoundPage from "./pages/public/NotFoundPage"


const App = () => {

  return (
    <Routes>

      {/* Layout*/}
      <Route element={<RootLayout/>}>

        {/* Public*/}
        <Route element={<PublicLayout/>}>
        
          {/* Home*/}
          <Route index element={<HomePage/>}/>
          {/* 404*/}
          <Route path="*" element={<NotFoundPage/>}/>

        </Route>

        {/* Private*/}
        <Route path="admin" element={<AdminLayout/>}>

          {/* Dashboard*/}
          <Route index element={<DashboardPage/>}/>
          {/* Profile*/}
          <Route path="profile" element={<ProfilePage/>}/>
          {/* Chat*/}
          <Route path="chat" element={<ChatPage/>}/>

        </Route>
        
        {/* Auth*/}
        <Route path="auth" element={<AuthLayout/>}>

          {/* Login*/}
          <Route path="login" element={<LoginPage/>}/>

          {/* Register*/}
          <Route path="register" element={<RegisterPage/>}/>

        </Route>

      </Route>

    </Routes>

  )
}
export default App