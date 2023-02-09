import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const form = useRef();
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_xp3108e",
        "template_aax8x2b",
        form.current,
        "4bQ_rOUKTctgQNHs-"
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
    setSent(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactName") {
      setContactName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  return (
    <section className="container form-container shadow-lg">
      {sent ? (
        <h1 className="text-center mt-3 email-header">Thanks for dropping a line!</h1>
      ) : (
        <>
          <h1 className="text-center mt-3 email-header">Say Hey!</h1>
          <form ref={form} onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                value={contactName}
                type="text"
                name="contactName"
                className="form-control"
                onChange={handleInputChange}
                id="exampleFormControlInput1"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                value={email}
                type="email"
                name="email"
                className="form-control"
                onChange={handleInputChange}
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Your Message
              </label>
              <textarea
                value={message}
                name="message"
                className="form-control"
                placeholder="Your message here..."
                onChange={handleInputChange}
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn" id="form-btn">
                Send Message
              </button>
            </div>
          </form>
        </>
      )}
      <div>
        <p className="error-text"></p>
      </div>
    </section>
  );
}
