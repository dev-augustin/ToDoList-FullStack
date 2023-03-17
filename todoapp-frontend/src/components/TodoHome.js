import React from "react";
import Login from "./users/Login";
import Register from "./users/Register";

function TodoHome() {
  return (
    <>
      <div>
        <h4>Todo List</h4>
      </div>

      <div>
        <Login />
        {/* <button type="submit">Sign Up</button> */}
      </div>
    </>
  );
}

export default TodoHome;
