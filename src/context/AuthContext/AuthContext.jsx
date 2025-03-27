import { createContext, useContext, useState } from "react";
import { createUser } from "../../backend/user/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (email, password) => {
    try {
      const newUser = await createUser(email, password);
      setUser(newUser);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register }}>
      {children}
    </AuthContext.Provider>
  );
};
