import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary  px-1   sm:mb-1 sm:ml-1 sm:mr-1 sm:rounded-none h-1/10 sm:w-11/12 m-auto"
    >
      <Container className="lg:flex lg:justify-between items-center">
        <Navbar.Brand href="#home">
          {/* logo container */}
          <Link href="/Home/Home">
            <img
              src="./logo.png"
              className="bg-white rounded-lg h-12 w-12"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigate buttons */}
          <Nav className=" lg:mx-auto gap-3 ">
            <NavLink
              to="/"
              className="hover:underline hover:underline-offset-1"
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="hover:underline hover:underline-offset-1"
            >
              About
            </NavLink>
            <NavLink
              to="/Donate"
              className="hover:underline hover:underline-offset-1"
            >
              Donate
            </NavLink>
            <NavLink
              to="/Gallery"
              className="hover:underline hover:underline-offset-1"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/Events"
              className="hover:underline hover:underline-offset-1"
            >
              Event
            </NavLink>
            <NavLink
              to="/Contact"
              className="hover:underline hover:underline-offset-1"
            >
              Contact
            </NavLink>
            <NavLink to="/Login">
              <button className="bg-gradient-to-r from-transparent to-transparent hover:underline hover:underline-offset-1 hover:from-pink-500 hover:to-yellow-500 rounded-lg px-3 lg:hidden flex">
                Login
              </button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLink to="/Login">
          <button className="bg-[#24774F] text-white rounded-lg px-2 py-1 hidden lg:flex">
            Log in
          </button>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Header;
