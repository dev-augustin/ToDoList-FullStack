import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
  const [toDo, setToDo] = useState(["Hello", "Good"]);
  const {id}=useParams();

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
      <h4>ToDo</h4>
      {toDo.map((toDo, index) => (
        <ul className="toDo-display">
          <li>{toDo.todo}</li>
          <button><a href={`http://localhost:8080/todo/${toDo.id}`}>Edit</a></button>
          <button>Delete</button>
        </ul>
      ))}
    </>
  );
}

export default Home;
