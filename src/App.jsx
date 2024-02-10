import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import { useEffect } from "react";

function App() {
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return <main className="wrapper">
    <Navbar />
    <Tasks />
  </main>;
}

export default App;
