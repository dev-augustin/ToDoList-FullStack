import React, { useEffect, useState } from "react";
import "../App.css";
// import "../index.css";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function Home() {
  const [toDos, setToDos] = useState([]);
  const [task, setTask] = useState({ todo: "" });

  const { id } = useParams();
  let navigate = useNavigate();

  const { todo } = task;

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8080/todos");
    setToDos(result.data);
  };

  const onInputChange = (e) => {
    setTask({ [e.target.name]: e.target.value });
    console.log("OnInputTask: " + task);
  };
  console.log(task);

  const addTask = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/todo", task);
    loadTasks();
    console.log("first: " + task);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/todo/${id}`);
    loadTasks();
  };

  return (
    <>
      <h4 className="text-3xl font-bold underline">ToDo</h4>

      <form onSubmit={(e) => addTask(e)}>
        <input
          className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="add-a-task"
          type={"text"}
          placeholder="Add a task"
          name="todo"
          value={todo}
          onChange={(e) => onInputChange(e)}
        />
        <button
          // className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Add Task
        </button>
      </form>
      {toDos.map((toDo, index) => (
        <ul className="toDo-display">
          <input type="checkbox" className="form-checkbox rounded text-pink-500 m-4" />
          <li>{toDo.todo}</li>
          {/* <button className="m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> */}
          <Link to={`/editTask/${toDo.id}`}>Edit</Link>
          {/* </button> */}
          <button
            onClick={() => deleteTask(toDo.id)}
            className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {/* <Link to={`http://localhost:8080/todo/${toDo.id}`}>Delete</Link> */}
            Delete
          </button>
        </ul>
      ))}
    </>
  );
}

export default Home;
