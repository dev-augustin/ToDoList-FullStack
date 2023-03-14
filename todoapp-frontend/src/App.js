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
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p>
      </div>
      <h1 className="text-3xl font-bold underline bg-red">Hello world!</h1>
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
