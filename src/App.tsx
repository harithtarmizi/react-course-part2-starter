import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import AuthProvider from "./state-management/auth/AuthProvider";
import { TasksProvider } from "./state-management/tasks";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
