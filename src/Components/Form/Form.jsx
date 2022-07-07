import React from "react";
import "./Form.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = (props) => {
  const [company, setCompany] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const authorisation = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.accessToken);
        props.setToken(res.accessToken);
      });
  };

  const getCompany = (event) => {
    setCompany(event.target.value);
    localStorage.setItem("user", `${event.target.value}`)

  };

  return (
    <div id="form">
      <div className="logoImg">
        <img
          src="https://iconape.com/wp-content/files/qa/334838/png/334838.png"
          alt=""
        />
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>User Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setLoginData({ ...loginData, email: event.target.value });
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          name=""
          id=""
          onChange={(event) => {
            setLoginData({ ...loginData, password: event.target.value });
          }}
        />
        <label>Company:</label>
        <select id="" onChange={getCompany}>
          <option selected disabled hidden>
            Select company
          </option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Tesla">Tesla</option>
          <option value="Alphabet">Alphabet</option>
          <option value="Microsoft">Microsoft</option>
        </select>
        <button
          onClick={() => {
            props.getUser(company);
            authorisation();
            props.getUserId()
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Form;
