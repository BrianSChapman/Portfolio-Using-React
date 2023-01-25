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
    // setName = "";
    // setEmail = "";
    // setMessage = "";
    // setErrorMessage = "";
  };

  return (
    <section>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-success-emphasis">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
