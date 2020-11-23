import React from "react";

const CEform = () => {
  return (
    <ul className="edit-nav">
      <li>
        <div className="top-part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather-x sidenav-close"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather-more-vertical"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </div>
      </li>
      <li>
        <div className="user-view center-align">
          <div class="file-field input-field">
            <div class="btn black">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </span>
              <input type="file" />
            </div>
          </div>
          <a>
            <span className="name black-text">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="name"
                    type="text"
                    className="validate"
                    placeholder="Name"
                    autoComplete="off"
                    className="center-align"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="cellphone"
                    type="text"
                    className="validate"
                    placeholder="Cellphone"
                    autoComplete="off"
                    className="center-align"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    placeholder="Email"
                    autoComplete="off"
                    className="center-align"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    placeholder="Password"
                    autoComplete="off"
                    className="center-align"
                  />
                </div>
              </div>
            </span>
          </a>
        </div>
      </li>
      <li>
        <div className="bottom-part">
          <span className="black-text">
            <button
              className="btn waves-effect waves-light black"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </span>
        </div>
      </li>
    </ul>
  );
};

export default CEform;
