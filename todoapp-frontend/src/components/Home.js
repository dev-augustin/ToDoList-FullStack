import React, { useEffect, useState } from "react";
import "../App.css";
// import "../index.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [toDo, setToDo] = useState(["Hello", "Good"]);
  const { id } = useParams();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8080/todos");
    console.log(result.data);
    setToDo(result.data);
  };

  return (
    <>
      <h4 className="text-3xl font-bold underline">ToDo</h4>
      <input
        class="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="add-a-task"
        type="text"
        placeholder="Add a task"
      />
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Add Task
      </button>
      {toDo.map((toDo, index) => (
        <ul className="toDo-display">
          <input type="checkbox" class="form-checkbox rounded text-pink-500 m-4" />
          <li>{toDo.todo}</li>
          <button class="m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to={`http://localhost:8080/todo/${toDo.id}`}>Edit</Link>
          </button>
          <button class=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to={`http://localhost:8080/todo/${toDo.id}`}>Delete</Link>
          </button>
        </ul>
      ))}
    </>
  );
}

export default Home;
