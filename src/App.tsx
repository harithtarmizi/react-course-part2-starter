import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import TaskContext from "./state-management/contexts/tasksContext";
import AuthContext from "./state-management/contexts/authContext";
import authReducer from "./state-management/reducers/authReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
