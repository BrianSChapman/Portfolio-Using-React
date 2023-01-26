import React from "react";
import linkedinLogo from '../Images/linkedin.png'
import githubLogo from '../Images/githubIcon.png'
import spotifyLogo from '../Images/spotifyLogo.png'


export default function Footer() {
  return (
    <footer className="container-fluid text-center">
      <div className="btn-group justify-content-center" role="group" aria-label="Basic outlined example">
        <button type="submit" className="btn btn-outline-dark" id="linkedin-btn">
          LinkedIn
        </button>
        <button type="submit" className="btn btn-outline-dark bi bi-github" id="github-btn">
          GitHub
        </button>
        <button type="submit" className="btn btn-outline-dark" id="spotify-btn">
          Spotify
        </button>
      </div>
    </footer>
  );
}
