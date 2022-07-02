import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import NewIncome from "./NewIncome";

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="new-income" element={<NewIncome />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
