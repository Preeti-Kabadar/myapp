import { Routes, Route } from "react-router-dom";

import Signup from "./signup/Signup";
import Hero from "./Hero/Hero";
import Login from "./login/Login";
import Navbar from "./Hero/navbar/Navbar";
import Profile from "./profile/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;