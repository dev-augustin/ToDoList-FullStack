import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

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
  };

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
              name="todo"
              value={todo}
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
      {toDos.map((toDo, index) => (
        <ul className="toDo-display">
          <input type="radio" className="form-checkbox rounded text-pink-500 m-4" />
          <p className="m-4 py-2 px-4">{toDo.todo}</p>
          <button className="m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to={`/editTask/${toDo.id}`}>Edit</Link>
          </button>
          <button
            onClick={() => deleteTask(toDo.id)}
            className="m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
