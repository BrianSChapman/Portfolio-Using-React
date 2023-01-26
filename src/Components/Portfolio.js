import React from "react";
import petPlayDate from "../Images/petPlayDate.png"
import noteTaker from "../Images/noteTaker.png"
import wordOfMyLife from "../Images/wordOfMyLife.png"
import textEditor from "../Images/textEditor.png"

export default function Projects() {
  return (
    <section id="projects" className="container">
        <h1 className="text-center">Things I've been Tinkering On</h1>
      <div className="row">
        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={petPlayDate} className="card-img-top" alt="Pet Play Date App Screenshot"></img>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={wordOfMyLife} className="card-img-top" alt="Word of My Life app image"></img>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={textEditor} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={noteTaker} className="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title text-center">Card title</h5>
              <p class="card-text text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
