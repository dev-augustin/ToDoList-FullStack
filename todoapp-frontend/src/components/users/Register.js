import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ name: "", userName: "", password: "", email: "" });
  const { name, userName, password, email } = user;
  const onInputChange = (e) => {
    console.log("e name: " + e.target.name + " vlaue: " + e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    console.log("eister: " + e);
    e.preventDefault();

    await axios.post("http://localhost:8080/user", user);
    alert("User account created successfully");

    navigate("/todoHome");
  };

  return (
    <>
      <h4>Sign Up</h4>
      <form onSubmit={(e) => registerUser(e)}>
        <label>Full Name</label>
        <input
          className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
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
        <label>Email</label>
        <input
          className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />

        <button
          type="submit"
          className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Submit
        </button>

        <Link
          to="/todoHome"
          className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Cancel
        </Link>
      </form>
    </>
  );
}

export default Register;
