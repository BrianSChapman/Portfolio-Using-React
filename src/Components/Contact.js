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
    <section className=" container">
      <div className="row">
        <form className="col s12 m7">
          <div className="card red accent-1">
            <div className="card-content"></div>
            <div className="input-field">
              <input placeholder="Placeholder" id="name" type="text">
                <label for="first_name">Your Name</label>
              </input>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="input-field">
            <input id="email" type="email" class="validate"></input>
            <label for="email">Email</label>
          </div>
          <div className="row">
            <form className="col">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    class="materialize-textarea"
                  ></textarea>
                  <label for="textarea1">Your message</label>
                </div>
              </div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
