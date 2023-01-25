import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "Name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    } else {
      setErrorMessage(
        "Please fill out all fields of the form. Appreciate you!"
      );
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email) || !Name) {
      setErrorMessage(
        "Please provide a valid name and email address. Thanks friend!"
      );
      return;
    }
    setName = "";
    setEmail = "";
    setMessage = "";
    setErrorMessage = "";
  };

  return (
    <section>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="exampleFormControlInput1"
            placeholder=""
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handleInputChange}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            onChange={handleInputChange}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="button" onClick={handleFormSubmit} className="btn btn-success-emphasis">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
