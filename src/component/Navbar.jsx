import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 bg-white shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            LA COLLECTION
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
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
