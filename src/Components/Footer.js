import React, {useState, useEffect } from "react";
import linkedinLogo from '../Images/linkedin.png'
import githubLogo from '../Images/githubIcon.png'
import joke from '../Images/jokeIcon.png'
import JokeModal from "./JokeModal";
import useModal from "./useModal";

export default function Footer() {

const {isShowing, toggle} = useModal();

  
  return (
    <footer className="container-fluid text-end">
     <a href="https://github.com/BrianSChapman" target="_blank"><img src={ githubLogo } className="logos-footer"></img></a> 
     <a href="https://www.linkedin.com/in/brian-siavao-chapman/" target="_blank"><img src={ linkedinLogo } className="logos-footer"></img></a>

    </footer>
  );
}
