import { createContext, ReactNode, useState, useContext } from "react";

const Context = createContext<{
  user?: { name: string; age: number };
  incrementAge?: () => void;
  decrementAge?: () => void;
}>({});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({
    name: "louis",
    age: 21,
  });

  const incrementAge = () =>
    setUser((user) => ({ ...user, age: user.age + 1 }));

  const decrementAge = () =>
    setUser((user) => ({ ...user, age: user.age - 1 }));

  const value = {
    user,
    incrementAge,
    decrementAge,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);
