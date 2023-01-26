import React from "react";
import resume from '../Images/BrianSChapmanResume.png'

export default function Resume() {
    return (
        <section className="container text-center">
            <h3>Click the image below to download!</h3>
            <a href="https://drive.google.com/file/d/1EzeIsIfRffSQW2hMPxvPcD9YEjtmGgV2/view?usp=sharing" target="_blank">
                <img src={resume} id="resume-img" alt="Image of Brian's resume"></img>
            </a>
        </section>
    );
}