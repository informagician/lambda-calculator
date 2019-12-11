import React from "react";

const OperatorButton = (props) => {

  function setOperator () {
    console.log(props.value);
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={"btn btn-operator"} onClick={setOperator}>{props.value}</button>
    </>
  );
};

export default OperatorButton;

