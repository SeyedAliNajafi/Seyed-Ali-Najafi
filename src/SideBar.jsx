import React, { useEffect , useRef} from "react";
import gsap from "gsap";

function SideBar({ isOpen, changeColor, setIsOpen , sidebarRef}) {
  useEffect(() => {
    gsap.to(".sidebar", {
      x: isOpen ? 0 : "-320px",
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isOpen]);

  return (
    <div ref={sidebarRef}>
      <div className="sidebar h-screen w-80 -translate-x-80 top-0 left-0 bg-secondary absolute hidden z-40 p-10 lg:block xl:hidden">
        <ul className="text-2xl gap-y-8 flex flex-col mt-10">
          <div className="flex flex-col gap-y-2">
            <a
              href="https://seyedalinajafi.ir"
              className="font-bold text-primary"
            >
              Home
            </a>
            <div className="w-full h-[1px] bg-gray-500"></div>
          </div>
          <div className="flex flex-col gap-y-2">
            <a href="#morent" className="font-bold text-primary">
              Projects
            </a>
            <div className="w-full h-[1px] bg-gray-500"></div>
          </div>
          <div className="flex flex-col gap-y-2">
            <a href="#footer" className="font-bold text-primary">
              Contacts
            </a>
            <div className="w-full h-[1px] bg-gray-500"></div>
          </div>
          <div className="flex justify-between items-center ">
            <p className="font-bold text-primary">Randomize the theme!</p>
            <span onClick={changeColor}>
              <svg
                className="size-12 text-primary fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
