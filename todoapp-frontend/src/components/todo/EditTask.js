import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";

function EditTask() {
  let navigate = useNavigate();
  // let location = useLocation();
  // const test = location.state;
  // console.log(test);
  const { id } = useParams();
  console.log(id);
  const { taskState } = useParams();
  console.log(id, taskState);
  const isChecked = taskState;
  const [task, setTask] = useState({ taskName: "", taskCompleted: isChecked });

  const { taskName } = task;

  useEffect(() => {
    loadTask();
  }, []);

  const onInputChange = (e) => {
    setTask({ taskName: e.target.value, taskCompleted: isChecked });
    console.log(task);
    // setTask({ [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log("I am here: " + task.taskName);
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateTask/${id}`, task,
    {
      auth: {
        username: "user",
        password: "user",
      }
    });
    navigate("/");
  };

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/task/${id}`, {
      auth: {
        username: "user",
        password: "user",
      },
    });
    setTask(result.data);
    console.log("result in edt: " + result);
  };

  return (
    <div>
      <h4 className="text-3xl font-bold underline">ToDo</h4>
      <Form onSubmit={(e) => onSubmit(e)}>
        <label> Task</label>
        <input
          className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="add-a-task"
          type={"text"}
          placeholder="Edit a task"
          name="taskName"
          value={taskName}
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
      </Form>
    </div>
  );
}

export default EditTask;
