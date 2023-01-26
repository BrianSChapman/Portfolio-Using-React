import React from "react";
import headshot from "../Images/Headshot.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="container">
      <div className="row align-items-center"></div>
      <div className="col-9">

      <div className="card mb-3 border-dark mb-3" id="bio-card">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start border-dark mb-3"
              id="bio-photo"
              src={headshot}
              alt="Brian Chapman Headshot"
            ></img>
          </div>
          <div className="col-md-8">
            <h2 className="card-title mt-3">About Me</h2>
            <p className="card-text">
              Hello! My name is Brian, a Southern California hailing from Philadelphia. Energetic and self-sufficient problem solver striving to utilize
              soft skills learned through customer service and facilities
              coordinating paired with newly acquired web development skills to
              transition into a front-end web development position.
            </p>
            <aside>
            <h4>Quick Facts:</h4>
            <ul>
              <li>Samoan/ Pacific Islander</li>
              <li>Musician</li>
              <li>Unapologetic Tiki Enthusiast</li>
              <li>Forever an optimist</li>
            </ul>
            </aside>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
