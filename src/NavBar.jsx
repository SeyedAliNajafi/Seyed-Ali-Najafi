import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NavBar({ isOpen, setIsOpen, changeColor, buttonRef }) {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to("#nav", {
      delay: 1.5,
      duration: 1,
      opacity: 1,
    });
  });

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent the click from propagating
    setIsOpen(!isOpen);
  };
  const randomRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent default spacebar scroll behavior
        randomRef.current.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div id="nav">
      <div className="px-1 md:px-2 lg:px-4 xl:container mb-4 md:0">
        <nav id="nav" className="p-4 opacity-0">
          <div className="flex justify-between items-center">
            <div className="md:gap-x-4 lg:gap-x-7 xl:gap-x-12 md:text-2xl lg:text-2xl 2xl:text-3xl font-bold hidden xl:flex">
              <a
                href="https://seyedalinajafi.ir"
                className="text-secondary hover:text-accent transition-all"
              >
                Home
              </a>
              <a
                href="#morent"
                className="text-secondary hover:text-accent transition-all"
              >
                Projects
              </a>
              <a
                href="#footer"
                className="text-secondary hover:text-accent transition-all"
              >
                Contacts
              </a>
            </div>
            <span
              className="hidden xl:block cursor-pointer"
              title="Change theme (spacebar)"
              ref={randomRef}
              onClick={changeColor}
            >
              <svg
                className="size-12 text-primary fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
            </span>
          </div>
          <div>
            <button
              ref={buttonRef}
              onClick={handleClick}
              className="flex flex-col justify-center items-center xl:hidden md:mt-5"
            >
              <div
                className={`bg-primary block z-50 transition-all duration-300 ease-out
          h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
              />
              <div
                className={`bg-primary block z-50 transition-all duration-300 ease-out
          h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <div
                className={`bg-primary block z-50 transition-all duration-300 ease-out
          h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
              />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
