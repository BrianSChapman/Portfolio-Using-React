import React from "react";
import githubIcon from "../Images/githubIcon.png";

//  can also just pass in props as the argument dor ProjectCard and use dot notation for each props (ie props.img, prop.alt, etc)
export default function ProjectCard({ title, img, alt, description, githubLink, deployment}) {
    
return ( 
    <div className="col-6">
      <div className="card mb-3 project-card shadow">
        <a href={deployment} target="_blank">
        <img src={img}
          className="card-img-top"
          alt={alt}
        ></img>
        </a>
        <div className="card-body border-top">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-center">
            {description}
          </p>
          <div className="text-center">
            <a
              href={githubLink}
              target="_blank"
            >
              <img
                src={githubIcon}
                alt="github Logo image"
                className="github-logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

