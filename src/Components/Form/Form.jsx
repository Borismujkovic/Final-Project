import React from "react";
import "./Form.scss";
import { useState } from "react";

const Form = (props) => {
  const [company, setCompany] = useState("");
  const [error, setError] = useState("")

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const authorization = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.ok) {
          setError("Incorrect pass or email");
        }
        localStorage.setItem("token", res.accessToken);
        props.setToken(res.accessToken);
        props.fetchAllData();
      })
      
  };

  const getCompany = () => {
    if (company) authorization();
    else alert("Please select company!");
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
        <div>
          <p className="error">{error}</p>
        </div>
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
        <label className="label">Company:</label>
        <select id="" onChange={(event) => setCompany(event.target.value)}>
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
            props.getUserId();
            getCompany();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Form;
