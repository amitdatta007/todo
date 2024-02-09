import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return <main className="wrapper">
    <Navbar />
    <Tasks />
  </main>;
}

export default App;
