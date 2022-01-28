import "./app.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Main from "./components/main/main";
import SignUp from "./components/signup/signUp";
import SuccessSignup from "./components/successSignup/successSignup";
// import SignUp from "./components/signup/signUp";
// import SuccessSignup from "./components/successSignup/successSignup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<SuccessSignup />} />
      </Routes>
    </div>
  );
}

export default App;
