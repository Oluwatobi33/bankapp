import React from "react";
import Signup from "./Signup";
import inter from "../assest/image/reinter.png"
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white ">
        <div class="container-fluid">
          <a class="navbar-brand ms-5" href="#">
            <img src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{width:'100px'}} className='img-responsive img-fluid' />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  What We do
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Signup">
                  Financial Inclusion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Signup">
                  Corporate Responsibility
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Signup">
                  News & insight
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar py-3" style={{ backgroundColor: '#18425d', height:"8vh",}}>
        <div class="container-fluid">
          <span class="navbar-text">
          <h6 className="text-white">Quickteller</h6>
          </span>
          <span><p className="text-white">Interested? <span className="fw-bold">Get Started</span></p></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
