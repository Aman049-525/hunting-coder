import Image from "next/image";
import React from "react";
import rexImage from "../public/rex.jpeg";

function MainHome() {
  return (
    <>
      <div>
        <h2 className="m-4 d-flex justify-content-center">Hunting Coder</h2>
      </div>
      <div>
        <div className="card-width">
          <div class="card m-4">
            <div className="d-flex justify-content-center p-2">
              <Image
                src={rexImage}
                width={250}
                height={250}
                alt={"picture of blog"}
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card m-4">
            <div className="d-flex justify-content-center p-2">
              <Image
                src={rexImage}
                width={250}
                height={250}
                alt={"picture of blog"}
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="card-width">
          <div class="card m-4">
            <div className="d-flex justify-content-center p-2">
              <Image
                src={rexImage}
                width={250}
                height={250}
                alt={"picture of blog"}
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card m-4">
            <div className="d-flex justify-content-center p-2">
              <Image
                src={rexImage}
                width={250}
                height={250}
                alt={"picture of blog"}
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
