import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import TaskContext from "./state-management/contexts/tasksContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
}

export default App;
