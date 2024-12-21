import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import OwnerDashboard from "./pages/OwnerDashboard";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import { DarkModeProvider } from "./features/Context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard.jsx";
import Proposal from "./pages/Proposal.jsx";
import SubmitedProjects from "./pages/SubmitedProjects.jsx";
import FreelancerLayout from "./features/freelancer/FreelancerLayout.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./features/admin/DashboardLayout.jsx";
import Users from "./pages/Users.jsx";
import AboutUs from "./ui/AboutUs.jsx";

// این بخش مربوط ب ریکت کوئری هس ک ب جای اکسیوس ازش استفاده میکنیم
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          {/* <Route path="/" element={<Navigate to="/auth" replace />} /> */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />

          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            {/* <Route index element={<OwnerDashboard />} /> it's wrong */}
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>

          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposal />} />
            <Route path="projects" element={<SubmitedProjects />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="proposals" element={<Proposal />} />
            <Route path="projects" element={<SubmitedProjects />} />
          </Route>

          <Route index element={<Navigate to="home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

// auth :احراز هویت
// task 1: auth user via OTP =>
// OTP:one-time-password:رمز یکبار مصرف

// 1. form -> getOTP -> input + button => get phone number => send OTP
// 2. form -> checkOTP -> request -> (otp,phoneNumber)=>
// backend check this data to know are they true and is a human or not

// ways to send request :
// 1.axios(useState,useEffect)
// 2.usefetch(data,loading,error)
// 3.react-query => redux alternative (remote states), fetch(get) , mutate(post)

// project
// proposal
// users
// category
// authentication

// نکته: ببین وقتی ی کلسی زیاد تکرار میشه میتونیم 2 تا راهکارو امتحان کنیم:
// 1. اونو ب صورت کامپوننت جدا بنویسیم
//  و محتوای متنش رو هم ب صورت چیلدرن بهش بدیم و کامپوننت اصلی صرفا اونو رندر کنیم

// 2.ب این روش میگن شخصی سازی کلس های تیلویند:
// تو این روش ی اسم کلاس میدی ب اون تگ بعد میری تو فایل index.css
//  با کمک layer بهش استایل میدی

// authenticate: who is he/she : name ,.. (احراز هویت)
// authorized: permission , access to route or file (محدودیت دسترسی)
