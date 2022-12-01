import { createContext, ReactNode, useState, useContext } from "react";

const Context = createContext<{ value: number; onClick: () => void }>({
  value: 1,
  onClick: () => {},
});

export const Provider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const value = {
    value: state,
    onClick,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useValue = () => useContext(Context);
