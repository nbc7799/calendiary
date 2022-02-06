import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./index.module.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//path : 페이지 이동할 경로
//exact : path가 정확히 일치할때만 이동(생략가능)
//component : 어떤 페이지인지 선언
// render : 커스터마이징가능한 컴포넌트를 함수형태로 선언
