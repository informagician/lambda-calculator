import React from "react";

const NumberButton = (props) => {

  function setNumber () {
    console.log(props.button);
  }


  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={"btn btn-num"} onClick={setNumber}>{props.button}</button>
    </>
  )
};

export default NumberButton;