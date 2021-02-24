import { createContext, useContext, useReducer } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = ({ reducer, initialState, children }) => {
  return (
    <TaskContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
