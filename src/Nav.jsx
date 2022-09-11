import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ClassMaster
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav navbar-nav navbar-collapse justify-content-end" id="navbarNav">
            <li className="nav-item">
              <Link className="nav-link text-primary active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary"to='/course'>
                kurslar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary"to='/teachers'>
                O'qituvchilar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
