import React from "react";
import headshot from "../Images/Headshot.jpg";

export default function AboutMe() {
  return (
    <section id="about">

        <div className="card mb-3 text-bg-dark">
          <div className="row g-0">
          <div className="col-md-4">
            <img className="img-fluid rounded-start"
              id="bio-photo"
              src={headshot}
              alt="Brian Chapman Headshot"
            ></img>
            </div>
            <div className="col-md-8">
                <h5 className="card-title">About Me</h5>
                <p className="card-text"> This is some info I'll fill out later.....</p>
                <p className="card-text"><small className="text-muted">It's a pleasure to meet you!</small></p>
                </div>
                </div>
            </div>
        </section>
  );
}
