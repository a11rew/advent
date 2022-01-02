import React, { createContext, useState } from "react";

export const WalletAuthContext = createContext({});

interface UserCtx {
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
}

export const WalletAuthContextProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState();

  return (
    <WalletAuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </WalletAuthContext.Provider>
  );
};

export interface UserType {
  user: {
    name: string;
    email: string;
    phone: string;
  };
}
