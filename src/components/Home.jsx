import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.2286377613343!2d-74.82467564449325!3d11.004277377591043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42daa52b3d349%3A0xf79c023d905d3cad!2sUniversidad%20Aut%C3%B3noma%20Del%20Caribe!5e0!3m2!1ses!2sco!4v1606071986510!5m2!1ses!2sco"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <div className="request">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input
                type="text"
                className="validate"
                placeholder="Address"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
                <polyline points="8 10 12 14 16 10"></polyline>
              </svg>
              <select>
                <option defaultValue="" disabled selected>
                  Category
                </option>
                <option value="1">Carpenter</option>
                <option value="2">Plumbing</option>
                <option value="3">Decoration</option>
              </select>
            </div>
            <div className="input-field col s5">
              <select>
                <option defaultValue="" disabled selected>
                  Service
                </option>
                <option value="1">Cabinetmaker</option>
                <option value="2">Plumber</option>
                <option value="3">Painter</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
              <input
                type="text"
                className="validate"
                placeholder="Description"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeÑinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <input
                type="text"
                className="validate"
                placeholder="Price"
                autoComplete="off"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
