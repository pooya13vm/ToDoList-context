import React, { Fragment } from "react";

const AboutMe = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div
            className="card col align-self-center"
            style={{ width: "25rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">About me</h5>
              <p className="card-text">
                Hi everybody my name is Pooya Vaghef i am a web developer and it
                is my first project with react i like coding and designing and i
                can do it for you please visit my website "
                <a>www.webmasterpvm.com</a>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
