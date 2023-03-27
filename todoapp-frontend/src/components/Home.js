import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import ListDisplay from "./users/ListDisplay";

function Home() {
  const [toDos, setToDos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [task, setTask] = useState({ taskName: "", taskCompleted: false });
  const [strikeElement, setStrikeElement] = useState(null);
  const { id } = useParams();
  let navigate = useNavigate();

  // const { todo } = task;

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8080/allTasks");
    setToDos(result.data);
  };

  const getCompletedTasks = async () => {
    console.log("I am in get");
    const result = await axios.get("http://localhost:8080/test");
    console.log(result);
    return <ListDisplay result={result} />;
  };

  const getNotCompletedTasks = async () => {
    console.log("I am in notget");
    const result = await axios.get("http://localhost:8080/not");
    return <ListDisplay props={result} />;
  };

  const onInputChange = (e, taskCompleted) => {
    setIsChecked(false);
    console.log(task);
    setTask({ taskName: e.target.value, taskCompleted: isChecked });
    console.log(task);
  };

  const addTask = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/addTask", task);
    loadTasks();
    console.log("first: " + task);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/deleteTask/${id}`);
    loadTasks();
  };

  const handleClick = async (toDo, index) => {
    console.log(toDo);
    console.log("index: " + index);

    const newTasks = [...toDos];
    console.log("new: " + newTasks);

    // const newCompletedTask = setTask({ taskCompleted: !newTasks[index].taskCompleted });
    // console.log(newCompletedTask);
    // console.log(newCompletedTask.taskId + " "+newCompletedTask.taskCompleted)
    // newTasks[index].taskCompleted = true;
    console.log("Before: " + newTasks[index].taskCompleted + newTasks[index].taskName);
    newTasks[index].taskCompleted = !newTasks[index].taskCompleted;
    console.log(toDo.taskCompleted);
    console.log(newTasks[index].taskCompleted + newTasks[index].taskName);
    const result = await axios.put(`http://localhost:8080/updateTask/${toDo.taskId}`, {
      taskName: toDo.taskName,
      taskCompleted: toDo.taskCompleted,
    });
    console.log(result);
    setIsChecked(true);
    setToDos(newTasks);
    console.log(toDos);
  };

  return (
    <>
      {/* <h4 className="text-3xl font-bold underline">ToDo</h4> */}
      <Form onSubmit={(e) => addTask(e)}>
        <Row className="mx-auto">
          <Col>
            {/* <Form.Group className="mb-3 mt-5 w-50"> */}
            <Form.Control
              className="mb-3 mt-5 w-100 mx-auto"
              id="add-a-task"
              type="text"
              placeholder="Add a task"
              name="taskName"
              value={task.taskName}
              onChange={(e) => onInputChange(e)}
            />
            {/* </Form.Group> */}
          </Col>
          <Col className="mb-3 mt-5">
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className="mb-3 mt-5">
          <Button variant="primary" type="submit">
            All
          </Button>
        </Col>
        <Col className="mb-3 mt-5">
          <Link to="/status">
            <Button variant="primary" type="submit" onClick={() => getNotCompletedTasks()}>
              Active
            </Button>
          </Link>
        </Col>
        <Col className="mb-3 mt-5">
          <Link to="/status">
            <Button variant="primary" type="submit" onClick={() => getCompletedTasks()}>
              Completed
            </Button>
          </Link>
        </Col>
      </Row>
      {toDos.map((toDo, index) => (
        <div className="toDo-display" key={index}>
          {/* <li key={toDo.taskId}> */}{" "}
          <input
            type="radio"
            // name="taskName"
            id={toDo.taskId}
            className="m-4 py-2 px-4"
            // onClick={() => handleClick(toDo, index)}
          />
          {/* <p
              // onClick={(e) => handleClick(e, toDo.taskId, index)}
              className="m-4 py-2 px-4"
            > */}
          <label
            onClick={() => handleClick(toDo, index)}
            className={`${toDo.taskCompleted ? "taskComplete" : "taskIncomplete"} m-4 py-2 px-4`}
          >
            {" "}
            {toDo.taskName}
          </label>
          {/* </p> */}
          <button className="m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to={`/editTask/${toDo.taskId}/${isChecked}`}>Edit</Link>
          </button>
          <button
            onClick={() => deleteTask(toDo.taskId)}
            className="m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {/* <Link to={`http://localhost:8080/todo/${toDo.id}`}>Delete</Link> */}
            Delete
          </button>
          {/* </li> */}
        </div>
      ))}
    </>
  );
}

export default Home;
