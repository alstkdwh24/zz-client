import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "Components/Login/LoginPage";
import EmailRegisterPage from "Components/EmailRegister/EmailRegisterPage";
import AppLayout from "Components/Layout/AppLayout";
import MainPage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<EmailRegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;