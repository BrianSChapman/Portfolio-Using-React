import React from "react";
import resume from '../Images/BrianSChapmanResume.png'

export default function Resume() {

    return (

<section id="about" className="container">
      <div className="row"></div>
      <div className="col-9">

      <div className="card mb-3 border-dark mb-3" id="bio-card">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start border-dark mb-3"
              id="bio-photo"
              src
              alt
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
    )};
//         <section className="container text-center">
//             <h3>Click the image below to download!</h3>
//             <a href="https://drive.google.com/file/d/1EzeIsIfRffSQW2hMPxvPcD9YEjtmGgV2/view?usp=sharing" target="_blank">
//                 <img src={resume} id="resume-img" className="shadow-lg mb-5" alt="Image of Brian's resume"></img>
//             </a>
//         </section>
//     );
// 