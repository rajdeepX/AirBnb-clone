import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import UserContext from "../UserContext";
import Card from "../components/Card";

const HomePage = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);

  return (
    <>
      <Navbar />
      <h1>Home page</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default HomePage;
