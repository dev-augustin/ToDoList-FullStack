import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./components/todo/AddTask";
import EditTask from "./components/todo/EditTask";
import DeleteTask from "./components/todo/DeleteTask";
import ViewTask from "./components/todo/ViewTask";
import TodoHome from "./components/TodoHome";
import Register from "./components/users/Register";
import Navbar from "./components/Navigationbar";
import ListDisplay from "./components/users/ListDisplay";
import Login from "./components/users/Login"

function App() {
  return (
    <div className="App">
      {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        </div> */}
      {/* <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p> */}

      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/todoHome" element={<TodoHome />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Login/>}/>
          <Route path="/status" element={<ListDisplay />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/updateTask/:id/:taskState" element={<EditTask />} />
          <Route path="/deleteTask/{id}" element={<DeleteTask />} />
          <Route path="/viewTask/{id}" element={<ViewTask />} />
          <Route path="/deleteTask" element={<DeleteTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
