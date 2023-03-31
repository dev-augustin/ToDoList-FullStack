import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", password: "" });
  const { userName, password } = user;
  const [allUsers, setAllUser] = useState([]);
  let userName1 = "";
  // useEffect(() => {
  //   async function fetchAllUsers() {
  //     const allUsers = await axios.get("http://localhost:8080/allUsers", {
  //       auth: {
  //         username: "user",
  //         password: "user",
  //       },
  //     });
  //     console.log(allUsers.data);
  //     setAllUser(allUsers.data);
  //     console.log(allUsers.data.length);
  //   }

  //   fetchAllUsers();
  // }, []);

  const onInputChange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // console.log("I am here: " + allUsers[0].userName);
    const response = await axios.post("http://localhost:8080/login", user, {
      auth: {
        username: "user",
        password: "user",
      },
    });
    console.log(response);
           navigate("/home", { state: { userName: user.userName } });
    // for (let i = 0; i < allUsers.length; i++) {
    //   if (allUsers[i].userName == e.target[0].value && allUsers[i].password == e.target[1].value) {
    //     console.log(": " + allUsers[i].userName + " : " + allUsers[i].password);
    //     userName1 = allUsers[i].userName;
    //     navigate("/home", { state: { userName: userName1 } });
    //   } else {
    //     console.log("Unsuccessful");
    //   }
    // }

    // if (e.target[0].value == "WHO" && e.target[1].value == "test") {
    //   console.log("asfsfsaf " + (await axios.get("http://localhost:8080/allTasks")).data.todo);
    //   navigate("/");
    // } else {
    //   alert("Wrong credentials");
    // }

    // await axios.get("http://localhost:8080/todos");
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <label>User Name</label>
            <input
              className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => onInputChange(e)}
            />
            <label>Password</label>
            <input
              className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <button
              type="submit"
              className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Submit
            </button>
            {/* <Link
              to="/"
              className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold h over:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
            >
              Login
            </Link> */}
            <Link
              to="/register"
              className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
