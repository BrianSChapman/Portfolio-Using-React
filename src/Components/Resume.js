import React from "react";
import resume from '../Images/BrianSChapmanResume.png'

export default function Resume() {
    return (
        <section className="container text-center">
            <h3>Click the image below to download!</h3>
            <a href="https://docs.google.com/document/d/1iADETEEmQdUXM1hMzwFE7joUcgJa_L6ZZWIji8xu2as/edit?usp=sharing" target="_blank">
                <img src={resume} id="resume-img" alt="Image of Brian's resume"></img>
            </a>
        </section>
    );
}