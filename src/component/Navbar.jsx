import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LA COLLECTION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a className="btn btn-outline-dark me-2" href="">
                <i className="fa fa-sign-in me-2"></i>
                Login
              </a>
              <a className="btn btn-outline-dark me-2" href="">
                <i className="fa fa-user-plus me-2"></i>
                Register
              </a>
              <a className="btn btn-outline-dark" href="">
                <i className="fa fa-shopping-cart me-2"></i>
                Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
