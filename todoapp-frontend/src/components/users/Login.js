import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div>
        <form>
          <div>
            <label>User Name</label>
            <input
              className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="userName"
            />
            <label>Password</label>
            <input
              className="shadow appearance-none border rounded p-8 m-8 w-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="password"
            />
          </div>
          <div>
            <Link
              to="/"
              className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold h over:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
            >
              Login
            </Link>
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
