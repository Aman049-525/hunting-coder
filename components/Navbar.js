import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ml-1">
          <Link class="navbar-brand" href="/MainHome">
            Hunting Coder
          </Link>
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
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  href="/MainHome"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" href="/Blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" href="/About">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" href="/Profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
