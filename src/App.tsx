import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import TaskContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </>
  );
}

export default App;
