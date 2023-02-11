import React, {useState, useEffect } from "react";
import linkedinLogo from '../Images/linkedin.png'
import githubLogo from '../Images/githubIcon.png'
import joke from '../Images/jokeIcon.png'

export default function Footer() {

// const [isFetchingJoke, setIsFetchingJoke] = useState(false);
// const [joke, setJoke] = useState("");

// fetch(
//   `https://icanhazdadjoke.com/`,
//       {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//         },
//       }
//     )
//     .then((response) => response.json())
//     .then((json) => {
//       const joke = json.results;
//     }




  return (
    <footer className="container-fluid text-end">
     <a href="https://github.com/BrianSChapman" target="_blank"><img src={ githubLogo } className="logos-footer"></img></a> 
     <a href="https://www.linkedin.com/in/brian-siavao-chapman/" target="_blank"><img src={ linkedinLogo } className="logos-footer"></img></a>

      {/*Incorporating dad joke button  */}
     {/* <a href="https://www.linkedin.com/in/brian-siavao-chapman/" target="_blank"><img src={ joke } className="logos-footer"></img></a>  */}

    </footer>
  );
}
