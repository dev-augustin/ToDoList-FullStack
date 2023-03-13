import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./components/todo/AddTask";
import EditTask from "./components/todo/EditTask";
import DeleteTask from "./components/todo/DeleteTask";
import ViewTask from "./components/todo/ViewTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/editTask/{id}" element={<EditTask />} />
          <Route path="/deleteTask/{id}" element={<DeleteTask />} />
          <Route path="/viewTask/{id}" element={<ViewTask />} />
          <Route path="/deleteTask" element={<DeleteTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
