import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-3">
        <h3>Blogs</h3>
      </div>
      <div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 1</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 2</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 3</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 4</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 5</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 6</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 7</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card m-2">
          <div className="d-flex justify-content-center p-2">
            <Link class="nav-link active" href="/BlogSpot/learn-js">
              <h4>Blog 8</h4>
            </Link>
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
