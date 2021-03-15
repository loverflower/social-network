import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Field, reduxForm } from "redux-form";
import { loginUser } from "../../../redux/authReducer";
import { Input } from "../../validatorcomponents/components";
import s from "./Login.module.css";
const LoginForm = (props) => {
  console.log(props.error);
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name={"email"}
          component={Input}
          type={"input"}
          placeholder={"your login"}
        />
      </div>
      <div>
        <Field
          name={"password"}
          component={"input"}
          type={"input"}
          placeholder={"your password"}
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" /> remmember
        me
      </div>
      <div>
        {props.error ? <span className={s.error}> {props.error}</span> : ""}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

// const LoginRedux = reduxForm({ form: "LoginForm" })(LoginForm);

const LogHoc = (Name) => {
  const Logcont = (props) => {
    const onSubmit = (data) => {
      props.loginUser(data);
    };
    return props.isAuth ? (
      ""
    ) : (
      <div>
        <h1>LOGIN PLEASE</h1>
        <Name onSubmit={onSubmit} />
      </div>
    );
  };
  return Logcont;
};

// export const Login = connect(null, { loginUser })(Logincont);

export const Login = compose(
  connect(null, { loginUser }),
  LogHoc,
  reduxForm({ form: "LoginForm" })
)(LoginForm);
