import { createContext, ReactNode, useState, useContext } from "react";

const Context = createContext<{
  tasks?: { title: string }[];
  addTask?: () => void;
  removeTask?: () => void;
}>({});

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState([
    {
      title: "ça a faire",
    },
    {
      title: "ca aussi",
    },
  ]);

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
    tasks,
    addTask,
    removeTask,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTasks = () => useContext(Context);
