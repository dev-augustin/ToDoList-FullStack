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
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
}

export default EditTask;
