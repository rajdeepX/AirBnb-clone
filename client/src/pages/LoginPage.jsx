import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const fetchData = async () => {
    try {
      await axios.post("/login", {
        email,
        password,
      });
      setRedirect(true);
    } catch (error) {
      alert("Login failed. Please try again");
    }
  };

  const login = (e) => {
    e.preventDefault();
    fetchData();
  };

  if (redirect === true) {
    <Navigate to={"/"} />;
  }

  return (
    <>
      <Navbar />
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={login}>
          <input
            type="email"
            name="email"
            className="input-email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="input-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
          <p className="route">
            Don&apos;t have an account yet?{" "}
            <Link to={"/register"}>Register now!</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
