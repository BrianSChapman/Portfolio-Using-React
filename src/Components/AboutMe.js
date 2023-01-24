import React from "react";
import headshot from "../Images/Headshot.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="section">

        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
          <div className="card-content">
            <img className="activator"
              id="bio-photo"
              src={headshot}
              alt="Brian Chapman Headshot"
            ></img>
             
            <span className="card-title activator" id="bio-card">Hi! I'm Brian.</span>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>  
            <h1>About Page</h1>
            <p>
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
              Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean
              sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis
              arcu non lectus tincidunt fermentum. Suspendisse aliquet orci
              porta quam semper imperdiet. Praesent euismod mi justo, faucibus
              scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet
              facilisis lectus blandit at.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
