import React from "react";
import petPlayDate from "../Images/petPlayDate.png"
import noteTaker from "../Images/noteTaker.png"
import wordOfMyLife from "../Images/wordOfMyLife.png"
import textEditor from "../Images/textEditor.png"
import githubIcon from "../Images/githubIcon.png"
import herokuLogo from "../Images/herokulogo.png"


export default function Portfolio() {
  return (
    <section id="portfolio" className="container">
        <h1 className="text-center">Things I've been Tinkering On</h1>
      <div className="row">
        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={petPlayDate} className="card-img-top" alt="Pet Play Date App Screenshot"></img>
            <div className="card-body">
              <h5 className="card-title text-center">Pet Play Date</h5>
              <p className="card-text text-center">
              Collaboration on a full-stack app. Create a profile for your pet, match profiles with other pet owners in your area, and schedule pet play dates!
              </p>
              <div className="text-center">
                <a href="https://github.com/BrianSChapman/pet-playdate" target="_blank"><img src={githubIcon} alt="github Logo image" className="github-logo"></img></a>
            </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={wordOfMyLife} className="card-img-top" alt="Word of My Life app image"></img>
            <div className="card-body">
              <h5 className="card-title text-center">Word of My Life</h5>
              <p className="card-text text-center">
                Collaborative effort. Log on to the app to receive a word of the day along with any relevant media related to it (Movie, books, video games). Making learning a new word fun!
              </p>
              <div className="text-center">
                <a href="https://github.com/BrianSChapman/word-of-my-life" target="_blank"><img src={githubIcon} alt="github Logo image" className="github-logo"></img></a>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={textEditor} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title text-center">Just Another Text Editor</h5>
              <p className="card-text text-center">
              Progressive web app text editor that can be installed onto your device, giving the user functionality even when offline.
              </p>
              <div className="text-center">
                <a href="https://github.com/BrianSChapman/textual-healing" target="_blank"><img src={githubIcon} alt="github Logo image" className="github-logo"></img></a>
            </div>
          </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card mb-3 project-card">
            <img src={noteTaker} className="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title text-center">Note Taker</h5>
              <p class="card-text text-center">
              Note Taking Application utilizing Express-js and the file system. Create, update, and delete notes from a persistent note-taker.
              </p>
              <div className="text-center">
                <a href="https://github.com/BrianSChapman/business-task-manager" target="_blank"><img src={githubIcon} alt="github Logo image" className="github-logo"></img></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
