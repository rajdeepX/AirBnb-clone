import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [ready, setReady] = useState(false);

  const fetchUser = async () => {
    if (!userInfo) {
      const data = await axios.get("/profile");
      console.log(data);
      setUserInfo(data);
      setReady(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, ready }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
