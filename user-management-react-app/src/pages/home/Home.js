import React from "react";
import "./home.css";
import profile from "../../assets/profile.jpg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Home() {
  const userData = useSelector((state) => state.userData);
  console.log(userData);

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="navbar">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>

      <div className="user">
        <div className="user-image">
          <img src={userData.profile} alt="" />
        </div>
        <div className="user-data">
          <h4>Hello {userData.name},</h4>
          <p>
            You are registered with the email id - {userData.email} and phone
            number - {userData.phoneNo}{" "}
          </p>
          <br />
          <br />
          <br />
          <p>You can logout by pressing the button at top-right corner.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
