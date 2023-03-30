import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col, Card, InputGroup } from "react-bootstrap";
import ListDisplay from "./users/ListDisplay";

function Home() {
  const [toDos, setToDos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [task, setTask] = useState({ taskName: "", taskCompleted: false });
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
    console.log(result.data);
    setToDos(result.data);
  };

  const getNotCompletedTasks = async () => {
    console.log("I am in notget");
    const result = await axios.get("http://localhost:8080/not");
    console.log(result);
    setToDos(result.data);
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
    const newTasks = [...toDos];
    newTasks[index].taskCompleted = !newTasks[index].taskCompleted;
    await axios.put(`http://localhost:8080/updateTask/${toDo.taskId}`, {
      taskName: toDo.taskName,
      taskCompleted: toDo.taskCompleted,
    });
    setIsChecked(true);
    setToDos(newTasks);
  };

  return (
    <>
      <div className="container ">
        <Form onSubmit={(e) => addTask(e)}>
          <Row className="mt-6">
            <Col className="mx-40 mt-4">
              <Form.Control
                id="add-a-task"
                type="text"
                placeholder="Add a new task"
                name="taskName"
                value={task.taskName}
                onChange={(e) => onInputChange(e)}
              />
            </Col>
            <Col className="mt-4">
              <Button variant="secondary" type="submit">
                Add Task
              </Button>
            </Col>
          </Row>
        </Form>
        {/* <Form onSubmit={(e) => addTask(e)}>
          <Row className="mx-auto m-4">
            <Col className="sm-10">
              <Form.Control
                id="add-a-task"
                type="text"
                placeholder="Add a new task"
                name="taskName"
                value={task.taskName}
                onChange={(e) => onInputChange(e)}
              />
            </Col>
            <Col className="sm-10">
              <Button variant="primary" type="submit">
                Add Task
              </Button>
            </Col>
          </Row>
        </Form> */}
        <div className="mx-4 mt-2 mb-2">
          <Button
            className="m-4 py-6 px-6 w-20"
            variant="dark"
            type="submit"
            onClick={() => loadTasks()}
          >
            All
          </Button>

          <Button
            className="m-4 py-2 px-6 w-20"
            variant="dark"
            type="submit"
            onClick={() => getNotCompletedTasks()}
          >
            Active
          </Button>

          <Button
            className="m-4 py-2 px-2 w-21"
            variant="dark"
            type="submit"
            onClick={() => getCompletedTasks()}
          >
            Completed
          </Button>
        </div>

        {toDos.map((toDo, index) => (
          <Card>
            <Card.Body>
              <ListDisplay
                todo={toDo}
                index={index}
                handleClick={handleClick}
                deleteTask={deleteTask}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;
