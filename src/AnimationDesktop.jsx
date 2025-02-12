import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function AnimationDesktop() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(".animated-text-desktop", {
      delay: 1.5,
      top: "6.2%", // Move text to 10% from the top
      left: "50%", // Keep text centered horizontally
      // transform: "translate(-50%, 0)", // Remove vertical centering
      fontSize: "3.5rem", // Shrink font size
      duration: 1, // Duration of the animation (change as per preference)
      ease: "power1.out",
    });
  });

  return (
    <div>
      <div className="content">
        <p
          id="animated-text"
          className="animated-text-desktop bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent text-5xl md:text-8xl font-bold absolute"
        >
          Seyed Ali Najafi
        </p>
      </div>
    </div>
  );
}

export default AnimationDesktop;
