import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./Components/todo/AddTask";
import EditTask from "./components/todo/EditTask";
import DeleteTask from "./components/todo/DeleteTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/editTask/{id}" element={<EditTask />} />
          <Route path="/deleteTask/{id}" element={<DeleteTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
