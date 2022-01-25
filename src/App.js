import "./app.module.css";
import Header from "./components/header/header";
import SignUp from "./components/signup/signUp";
// import SuccessSignup from "./components/successSignup/successSignup";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
