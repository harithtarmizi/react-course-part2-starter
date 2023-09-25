import NavBar from "./state-management/NavBar";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import { TasksProvider } from "./state-management/tasks";
import "./App.css";

function App() {
  return (
    <TasksProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvider>
  );
}

export default App;
