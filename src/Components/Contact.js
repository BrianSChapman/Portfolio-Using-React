import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    } else {
      setErrorMessage(
        "Please fill out all fields of the form. Appreciate you! :)"
      );
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage(
        "Please provide a valid name and email address. Thank you! :)"
      );
      return;
    }
  
  };

  return (
    <section className="container">
      <h1>Say Hey!</h1>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            value={name}
            type="text"
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
            className="form-control"
            onChange={handleInputChange}
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn ">
            Send Message
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
            </div> 
      )}
    </section>
  );
      }
