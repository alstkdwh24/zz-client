import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "Components/Login/LoginPage";
import EmailRegisterPage from "Components/EmailRegister/EmailRegisterPage";

function App() {
  return  (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<EmailRegisterPage />} />
      </Routes>
    </BrowserRouter>);
}

export default App;