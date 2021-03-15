import React from "react";

import { Field, reduxForm } from "redux-form";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import DialogMessages from "./DialogMessages/DialogsMessages";

const Dialogs = (props) => {
  const getDataFromForm = (data) => {
    props.currentDialogs(data.textAreaDialogs);
    props.addDialogs();
  };

  const TextAreaField = (props) => {
    console.log(props);
    return (
      <form onSubmit={props.handleSubmit}>
        <Field name="textAreaDialogs" component="textarea" type="textarea" />
        <button>Add new post</button>
      </form>
    );
  };
  const TextareaRedux = reduxForm({ form: "DialogForm" })(TextAreaField);

  const dialogsElement = props.dialogState.postdata.map((el) => (
    <DialogItem id={`${el.id}`} name={`${el.name}`} />
  ));

  const dialogsMessages = props.dialogState.postMessages.map((el) => (
    <DialogMessages id={`${el.id}`} messages={`${el.messages}`} />
  ));

  // const currentDialogsTextarea = (e) => {
  //   const displayMessage = e.target.value;
  //   props.currentDialogs(displayMessage);
  // };

  // const addDialogsTextarea = () => {
  //   props.addDialogs();
  // };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElement}</div>
      <div className={s.messages}>
        {dialogsMessages}
        {/* <div>
          <textarea
            onChange={currentDialogsTextarea}
            value={props.dialogState.displayMessage}
            placeholder="put in..."
          ></textarea>
          <button onClick={addDialogsTextarea} className={s.btn}>
            Add new post
          </button>
        </div> */}
        <TextareaRedux onSubmit={getDataFromForm} {...props} />
      </div>
    </div>
  );
};

export default Dialogs;
