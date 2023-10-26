import React from "react";

function About(props) {
  const { logoImage, aboutText } = props;

  return (
    <aside>
      <img
        src={logoImage || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
