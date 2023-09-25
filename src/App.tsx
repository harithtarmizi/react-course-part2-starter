import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import AuthProvider from "./state-management/AuthProvider";
import TaskProvider from "./state-management/reducers/TaskProvider";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
