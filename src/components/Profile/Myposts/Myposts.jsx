import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../validatorcomponents/components";
import { requireSize } from "../../validators/validator";

import Post from "./Mypost/Post";

import s from "./Myposts.module.css";
import { Status } from "./Status";

const Mypost = (props) => {
  const TextAreaProfile = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          name="profileNameArea"
          component={Textarea}
          type="textarea"
          validate={[requireSize]}
        />
        <button>submit</button>
      </form>
    );
  };

  const TextAreaProfiRedux = reduxForm({ form: "TextAreaProfile" })(
    TextAreaProfile
  );

  const newPostElement = props.currentData.postProps.map((el) => (
    <Post message={`${el.messages}`} like={`${el.likes}`} />
  ));

  const getCurrentDialog = (data) => {
    props.changeTextareaWall(data.profileNameArea);
    props.clickButtonWall();
  };

  // const getValueFromTextArea = () => {
  //   props.clickButtonWall();
  // };

  // const changeTextarea = (e) => {
  //   let text = e.target.value;
  //   props.changeTextareaWall(text);
  // };
  return (
    <div>
      <h2>MY POSTS</h2>
      <Status
        status={props.currentData.currentUserStatus}
        updateStatus={props.updateStatus}
      />
      <div className="textarea_box">
        {/* <textarea
          onChange={changeTextarea}
          className="textarea_form"
          value={props.currentData.currentMessage}
          placeholder="input..."
        ></textarea>
        <button onClick={getValueFromTextArea} className={s.btn}>
          Add input
        </button> */}
        <TextAreaProfiRedux onSubmit={getCurrentDialog} />
      </div>
      <div className={s.posts}>{newPostElement}</div>
    </div>
  );
};

export default Mypost;
