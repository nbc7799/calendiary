import "./app.module.css";
import Header from "./components/header/header";
// import Login from "./components/login/login";
import SignUp from "./components/signup/signUp";

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
    </div>
  );
}

export default App;
