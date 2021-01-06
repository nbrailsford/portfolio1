import React from "react";

const name = "Nathan_Brailsford";
let nameArray = name.split("");

class Name extends React.Component {
  render() {
    return nameArray.map((letter, i) => {
      return (
        <span className="activeHover" key={i}>
          {letter}
        </span>
      );
    });
  }
}

export default Name;
