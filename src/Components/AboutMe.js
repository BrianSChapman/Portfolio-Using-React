import React, { useState, useEffect} from "react";
import headshot from "../Images/Headshot.jpg";
import tropical from "../Images/tropical.jpg";
import beachy from "../Images/beachy.jpg"
import shorebreak from "../Images/shorebreak.jpg"
import useScrollPosition from "./useScrollPosition";

export default function AboutMe() {

  return (
  <>
    <div id="hero-container">
    {/* <div id="welcome" className="text-center shadow-lg .d-sm-none .d-md-block">Welcome (Afio mai).</div> */}
        <img src={shorebreak} alt="Image of palm trees" id="tropical-hero" classname="img-fluid"></img>
  
        </div>        
          <section id="about" className="container">
      <div className="row align-items-center"></div>
      <div className="col-9">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <img
              className="rounded-start border-dark card-img"
              id="bio-photo"
              src={headshot}
              alt="Brian Chapman Headshot"
            ></img>
          </div>
          <div className="col-md-7 col-sm-12 text-body-about">
            <p className="about-me-text card-body">
              Hello! I'm Brian Chapman, a Southern California native hailing from Philadelphia. </p>

              <p className="card-body hidden" id="cover-letter-text"> <em>"Energetic and self-sufficient problem solver striving to utilize
              soft skills learned through customer service and facilities
              coordinating paired with strong web development skills to
              transition into a web development position."</em>
            </p>
            <p className="about-me-text card-body"> In short, I am a strong collaborator, love to problem solve, adapt to each passing situation, and am passionate about creating positive experiences (for the end user and for my colleagues). </p>
            <aside className="text-center">
            <h3 id="quick-facts"> Quick Facts:</h3>
            <ul>
              <li>Samoan/ Pacific Islander</li>
              <li>Musician</li>
              <li>Background in marketing</li>
              <li>Forever an optimist</li>
            </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

