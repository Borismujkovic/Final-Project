import React from "react";
import "./Login.scss";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";

const Login = (props) => {
  return (
    <div id="login">
      <Form
        getUser={props.getUser}
        setToken={props.setToken}
        token={props.token}
        localStorage={props.localStorage}
        user={props.user}
        getUserId={props.getUserId}
        companies={props.companies}
        fetchAllData={props.fetchAllData}
        
      />
    </div>
  );
};

export default Login;
