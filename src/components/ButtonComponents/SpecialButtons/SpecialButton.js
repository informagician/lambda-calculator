import React from "react";

const SpecialButton = (props) => {

  function setSpecial () {
    console.log(props.button);
  }


  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={"btn btn-special"} onClick={setSpecial}>{props.button}</button>
    </>
  );
};
export default SpecialButton;