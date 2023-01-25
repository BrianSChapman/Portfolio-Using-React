import React from "react";
import headshot from "../Images/Headshot.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="container">

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
                <h5 className="card-title mt-3 m">About Me</h5>
                <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id turpis sit amet elit ullamcorper convallis at quis justo. In mollis odio dolor. Maecenas mattis mattis erat. Morbi et orci et nisi congue sollicitudin sed ullamcorper tortor. Suspendisse lacinia, quam quis sodales viverra, velit sapien ullamcorper augue, vitae lobortis ante elit eu nisi. Morbi eros libero, dignissim vel volutpat nec, elementum in metus. Aliquam non vestibulum justo, sed iaculis sem. Aenean malesuada interdum ligula, nec semper quam. Duis neque felis, aliquam at pulvinar in, egestas non nunc..</p>
                <p className="card-text"><small className="text-muted">It's a pleasure to meet you!</small></p>
                </div>
                </div>
            </div>
        </section>
  );
}
