import React from "react";
import s from "./header.module.css";

const Header = (props) => {
  console.log(props);
  // const unlog = () => {
  //   props.state.unlogUser();
  //   console.log(props.state.unlogUser);
  // };
  return (
    <header className={s.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
      <div>
        {props.state.state.auth ? (
          <>
            <div className={s.log}>Helloy,{props.state.state.login}</div>
            <button className={s.btn} onClick={props.state.unlogUser}>
              Unlog
            </button>
          </>
        ) : (
          <div className={s.log}>LOGIN</div>
        )}
      </div>
    </header>
  );
};

export default Header;
