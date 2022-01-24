import "./app.module.css";
import Header from "./components/header/header";
// import Login from "./components/login/login";
import SuccessSignup from "./components/successSignup/successSignup";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <SuccessSignup />
    </div>
  );
}

export default App;
