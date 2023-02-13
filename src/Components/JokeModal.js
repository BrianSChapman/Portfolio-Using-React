import React, { useState, useEffect } from "react";

export default function JokeModal() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const getData = async () => {
        try {
        const response = await fetch(" https://icanhazdadjoke.com/");
        const joke = await response.json();
            setJoke(joke);
        } catch(err) {
        console.log(err.message);
        setJoke(null);
      }
    }
    getData()
  }, []);



 
  return (
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Dad Joke Time!</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>{ joke }</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
