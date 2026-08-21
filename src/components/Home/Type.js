import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Web Full-Stack",
          "Spécialiste E-commerce (MERN)",
          "Créateur d'Applications Web sur Mesure",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
