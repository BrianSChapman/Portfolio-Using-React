import React from "react";
import headshot from "../Images/Headshot.jpg";
import tropical from "../Images/tropical.jpg";
import leafyboi from "../Images/leafyboi.png";


export default function AboutMe() {
  return (
  <>
        <img src={tropical} alt="Image of palm trees" id="tropical-hero" classname="img-fluid"></img>
        <div id="welcome" className="text-center">Welcome (Afio mai).</div>        
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
              Hey friends! I'm Brian Chapman, a Southern California native hailing from the mean streets of Philadelphia. </p>

              <p className="about-me-text card-body" id="cover-letter-text"> <em>"Energetic and self-sufficient problem solver striving to utilize
              soft skills learned through customer service and facilities
              coordinating paired with newly acquired web development skills to
              transition into a web development position."</em>
            </p>
            <p className="about-me-text card-body">...Kinda standard cover letter stuff, right? Real talk - I love working with people, problem solving is my jam, and I'm passionate about creating positive experiences (for the end user and for my colleagues). </p>
            <aside className="text-center">
            <h3 id="quick-facts">Quick Facts:</h3>
            <ul>
              <li>Samoan/ Pacific Islander</li>
              <li>Musician (Toured with a punk band)</li>
              <li>Unapologetic Tiki Enthusiast</li>
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
