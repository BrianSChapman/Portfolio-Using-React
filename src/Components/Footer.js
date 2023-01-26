import React from "react";

const linkedinBtn = document.getElementById("linkedin-btn");
const githubBtn = document.getElementById("github-btn");
const spotifyBtn = document.getElementById("spotify-btn");



export default function Footer() {
  return (
    <footer className="container-fluid text-center">
      <div className="btn-group justify-content-center" role="group" aria-label="Basic outlined example">
        <button type="submit" className="btn btn-outline-dark" id="linkedin-btn">
          LinkedIn
        </button>
        <button type="submit" className="btn btn-outline-dark bi bi-github" id="github-btn"><i className="bi bi-github"></i>
          GitHub
        </button>
        <button type="submit" className="btn btn-outline-dark" id="spotify-btn">
          Spotify
        </button>
      </div>
    </footer>
  );
}
