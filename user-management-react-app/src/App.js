import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { storeUserData } from "./redux/action/action";
import pageNotFound from "./assets/pageNotFound.png";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const refreshDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (refreshDetails) {
      dispatch(storeUserData(refreshDetails));
      navigate("/home");
    }
  }, [dispatch, navigate]);

  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <div>
            <img className="page-not-found" src={pageNotFound} alt="" />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
