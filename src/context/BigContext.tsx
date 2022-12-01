import { createContext, ReactNode, useState, useContext } from "react";

const Context = createContext<{
  user?: { name: string; age: number };
  tasks?: { title: string }[];
  incrementAge?: () => void;
  decrementAge?: () => void;
  addTask?: () => void;
  removeTask?: () => void;
}>({});

export const Provider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({
    name: "louis",
    age: 21,
  });
  const [tasks, setTasks] = useState([
    {
      title: "ça a faire",
    },
    {
      title: "ca aussi",
    },
  ]);

  const incrementAge = () =>
    setUser((user) => ({ ...user, age: user.age + 1 }));

  const decrementAge = () =>
    setUser((user) => ({ ...user, age: user.age - 1 }));

  const addTask = () =>
    setTasks((tasks) => {
      return [...tasks, { title: "added task" }];
    });

  const removeTask = () =>
    setTasks((tasks) => {
      tasks.pop();
      return [...tasks];
    });

  const value = {
    user,
    incrementAge,
    decrementAge,
    tasks,
    addTask,
    removeTask,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGlobalState = () => useContext(Context);
