import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditTask() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [task, setTask] = useState({ todo: "" });

  const { todo } = task;

  useEffect(() => {
    loadTask();
  }, []);

  const onInputChange = (e) => {
    setTask({ [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/todo/${id}`, task);
    navigate("/");
  };

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/todo/${id}`);
    setTask(result.data);
    console.log("result in edt: " + result);
  };

  return (
    <div>
      <h4 className="text-3xl font-bold underline">ToDo</h4>
      <form onSubmit={(e) => onSubmit(e)}>
        <label> Task</label>
        <input
          className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="add-a-task"
          type={"text"}
          placeholder="Edit a task"
          name="todo"
          value={todo}
          onChange={(e) => onInputChange(e)}
        />
        <button
          type="submit"
          className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Submit
        </button>
        <Link
          to="/"
          className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default EditTask;
