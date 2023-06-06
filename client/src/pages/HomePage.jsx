import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import UserContext from "../UserContext";

const HomePage = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo.data.username);
  const { username } = userInfo.data;
  return (
    <>
      <Navbar />
      <h1>Home page</h1>
      <h2>Welcome, {username}</h2>
    </>
  );
};

export default HomePage;
