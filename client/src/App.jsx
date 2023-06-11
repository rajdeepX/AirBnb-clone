import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import RoomPage from "./pages/RoomPage";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          {/* <Route path="/account/:bookings" element={<AccountPage />} />
          <Route path="/account/:accommodations" element={<AccountPage />} /> */}
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
