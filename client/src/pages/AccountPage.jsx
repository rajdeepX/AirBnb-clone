import { useContext, useState } from "react";
import UserContext from "../UserContext";
import Navbar from "../components/Navbar";
import { Link, NavLink, Navigate, useParams } from "react-router-dom";
import "./AccountPage.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AccountPage = () => {
  const { subpage } = useParams();
  // console.log(subpage);

  const { userInfo } = useContext(UserContext);
  // console.log(userInfo);

  const logout = async () => {
    await axios.post("/logout");
  };

  return (
    <>
      <Navbar />
      <div className="account-container">
        <nav className="account-nav">
          <NavLink to={"/account/profile"} activeclassname="active">
            <p>My Profile</p>
          </NavLink>
          <NavLink to={"/account/bookings"} activeclassname="active">
            <p>My Bookings</p>
          </NavLink>
          <NavLink to={"/account/accommodations"} activeclassname="active">
            <p>My Accommodations</p>
          </NavLink>
        </nav>
      </div>
      <FontAwesomeIcon icon={faPaperPlane} />
    </>
  );
};

export default AccountPage;
