import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

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

  const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
<React.Fragment>

    <div className="modal" id="joke-modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dad Joke Time!</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{ joke }</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>, document.body
  ) : null;
}
