import React from "react";

const SlotMachine = (props) => {
  const { x, y, z } = props;

  if (props.x === props.y && y === props.z) {
    return (
      <>
        <h1>
          {x} : {y} : {z}
        </h1>
        <h3>"This is Matching"</h3>
        <hr />
      </>
    );
  } else {
    return (
      <>
        <h1>
          {x} : {y} : {z}
        </h1>
        <h3>"This is not Matching"</h3>
        <hr />
      </>
    );
  }
};

export default SlotMachine;
