import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="nav justify-content-center">
          <ul className="d-flex">
            <li className="nav-item">
              <Link to="/">
                <img src="media/logo.png" alt="restaurant logo" width="100px" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu">menu</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/locations">locations</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about">about</Link>
            </li>
            <li className="nav-item">
              <Link to="/login">account</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;