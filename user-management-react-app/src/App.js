import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";

const getLocalData = () => {
  const localUserData = localStorage.getItem("userDetails");
  if (localUserData) {
    console.log(localUserData);
  } else {
    return [];
  }
};

function App() {
  getLocalData();
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
