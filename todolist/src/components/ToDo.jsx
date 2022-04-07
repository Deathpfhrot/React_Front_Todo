import React from "react";

const ToDo = (props) => {
  const theChange = () => {
    props.change(props.index);
  };

  return (
    <div className={props.done ? "done" : "open"} onClick={theChange}>
      <p>{props.text}</p>
    </div>
  );
};

export default ToDo;
