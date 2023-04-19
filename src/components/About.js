import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.github}
      {props.linkden}

    </div>
  );
}

export default About;
