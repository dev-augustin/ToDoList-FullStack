import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>

        {/* <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p> */}
        <Link
          to="/todoHome"
          className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Logout
        </Link>
      </div>

      <div></div>
    </>
  );
}

export default Navbar;
