import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navigationbar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">To Do List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Navbar.Text>
              <Link
                to="/todoHome"
                className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Logout
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    //   {/* <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p>
    //   <Link
    //     to="/todoHome"
    //     className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    //   >
    //     Logout
    //   </Link>
  );
}

export default Navigationbar;
