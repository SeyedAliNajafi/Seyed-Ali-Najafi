import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";
import Hero from "./Hero";
import Morent from "./Morent";
import Footer from "./Footer";
import SideBarMobile from "./SideBarMobile";
import SideBar from "./SideBar";
import Mizan from "./Mizan";
import { Helmet } from "react-helmet-async";
import AnimationDesktop from "./AnimationDesktop";
import AnimationMobile from "./AnimationMobile";
// Define your color schemes
const colorSchemes = [
  {
    text: "#021a20",
    background: "#eefbfe",
    primary: "#15d8ef",
    secondary: "#82bcf6",
    accent: "#5790f3",
  },
  {
    text: "#09080d",
    background: "#f9f9fc",
    primary: "#6f56b0",
    secondary: "#afa0d9",
    accent: "#8f77d0",
  },
  {
    text: "#050e0c",
    background: "#f5fcfa",
    primary: "#3ac9a6",
    secondary: "#86e4cc",
    accent: "#58e0be",
  },
  {
    text: "#0d130c",
    background: "#f6fbf5",
    primary: "#4ecf37",
    secondary: "#92f181",
    accent: "#5cfe40",
  },
  {
    text: "#06070a",
    background: "#f1f3f9",
    primary: "#4b69c7",
    secondary: "#829ae5",
    accent: "#5c7fec",
  },
  {
    text: "#110708",
    background: "#fbf3f4",
    primary: "#d04350",
    secondary: "#e98790",
    accent: "#eb5b68",
  },
  {
    text: "#0d0a0b",
    background: "#fbfafa",
    primary: "#92787d",
    secondary: "#b5c2c3",
    accent: "#9c9aad",
  },
  {
    text: "#0b1219",
    background: "#f7f9fc",
    primary: "#327ed5",
    secondary: "#79b1f0",
    accent: "#4699f9",
  },
  {
    text: "#0f0e0f",
    background: "#fcfbfd",
    primary: "#b147ba",
    secondary: "#df82e6",
    accent: "#e749f4",
  },
  {
    text: "#16160e",
    background: "#f9f9f4",
    primary: "#e8f011",
    secondary: "#d8db90",
    accent: "#d6da69",
  },
  {
    text: "#0c1616",
    background: "#fafdfc",
    primary: "#4db5af",
    secondary: "#92d8d4",
    accent: "#73d4cf",
  },
  {
    text: "#121611",
    background: "#fcfdfc",
    primary: "#839a7e",
    secondary: "#acbeaf",
    accent: "#94ab9c",
  },
  {
    text: "#050607",
    background: "#f4f7f8",
    primary: "#6395b3",
    secondary: "#91bbd4",
    accent: "#65a8d0",
  },
  {
    text: "#0f1904",
    background: "#fdfefa",
    primary: "#87de2a",
    secondary: "#80eb87",
    accent: "#62e78c",
  },
  {
    text: "#0a0d10",
    background: "#f3f5f8",
    primary: "#5f79a1",
    secondary: "#a4a1c8",
    accent: "#9989ba",
  },
  {
    text: "#0b070a",
    background: "#faf6f8",
    primary: "#b05893",
    secondary: "#d699c2",
    accent: "#cf6faf",
  },
  {
    text: "#091503",
    background: "#f4fdef",
    primary: "#2bdede",
    secondary: "#8cedd1",
    accent: "#53d9e4",
  },
  {
    text: "#15030f",
    background: "#fdf5fa",
    primary: "#e032a8",
    secondary: "#ee8c9f",
    accent: "#e65c5f",
  },
  {
    text: "#0c0c11",
    background: "#f9fafc",
    primary: "#4049c9",
    secondary: "#8d94ee",
    accent: "#4855f8",
  },
  {
    text: "#070606",
    background: "#f8f5f5",
    primary: "#ac615d",
    secondary: "#d79b98",
    accent: "#d87772",
  },
  {
    text: "#0a1113",
    background: "#f9fbfc",
    primary: "#43a6c5",
    secondary: "#94d4e8",
    accent: "#59c6e8",
  },
  {
    text: "#0a1113",
    background: "#f9fbfc",
    primary: "#43a6c5",
    secondary: "#94d4e8",
    accent: "#59c6e8",
  },
  {
    text: "#422b4d",
    background: "#e4bdd0",
    primary: "#cc8ac8",
    secondary: "#bc9ed7",
    accent: "#ba8fb8",
  },
  {
    text: "#9e8787",
    background: "#492222",
    primary: "#794a4a",
    secondary: "#825c5c",
    accent: "#743b3b",
  },
  {
    text: "#a4516c",
    background: "#ffb1c6",
    primary: "#e193b5",
    secondary: "#e07aa6",
    accent: "#ef79ac",
  },
  {
    text: "#213438",
    background: "#72979f",
    primary: "#88b6c0",
    secondary: "#afcbd1",
    accent: "#b5c2c5",
  },
  {
    text: "#DF7765",
    background: "#fFCC85",
    primary: "#F0A85B",
    secondary: "#FF955F",
    accent: "#F97645",
  },
  {
    text: "#99424f",
    background: "#e19a9a",
    primary: "#c84557",
    secondary: "#cd4d4d",
    accent: "#a45a52",
  },
  {
    text: "#115350",
    background: "#749494",
    primary: "#1c6d5e",
    secondary: "#0b665e",
    accent: "#2d5e61",
  },
  {
    text: "#847ea6",
    background: "#cccbe1",
    primary: "#b7c0df",
    secondary: "#aeadca",
    accent: "#9f9cb6",
  },
  {
    text: "#b76c46",
    background: "#fdedd4",
    primary: "#c4c089",
    secondary: "#e2c094",
    accent: "#cfceb6",
  },
  {
    text: "#ffc340",
    background: "#fff4e1",
    primary: "#ffda59",
    secondary: "#fbc15d",
    accent: "#ffd96c",
  },
  {
    text: "#844d6c",
    background: "#f2dfd3",
    primary: "#dfcdcb",
    secondary: "#ada0a5",
    accent: "#bb8ca7",
  },
  {
    text: "#33558c",
    background: "#d6d6e8",
    primary: "#bfc6d0",
    secondary: "#9cabc0",
    accent: "#6e87a7",
  },
  {
    text: "#ca6f85",
    background: "#ffc5d3",
    primary: "#fda4ba",
    secondary: "#ff92ac",
    accent: "#e49dae",
  },
  {
    text: "#44484c",
    background: "#e6edef",
    primary: "#718090",
    secondary: "#85929f",
    accent: "#616971",
  },
  {
    text: "#739573",
    background: "#203220",
    primary: "#646d64",
    secondary: "#5f7b5f",
    accent: "#507450",
  },
  {
    text: "#584766",
    background: "#392d3e",
    primary: "#463f54",
    secondary: "#786789",
    accent: "#9b82cd",
  },
  {
    text: "#785892",
    background: "#392d3e",
    primary: "#4e4956",
    secondary: "#786789",
    accent: "#9b82cd",
  },
  {
    text: "#8cb4b4",
    background: "#d4e4e4",
    primary: "#98bdbc",
    secondary: "#659393",
    accent: "#a2c4c4",
  },
  {
    text: "#82876c",
    background: "#e0ddc5",
    primary: "#898d78",
    secondary: "#6b7153",
    accent: "#a5a28b",
  },
];

// Function to get a random color scheme
const getRandomColorScheme = () => {
  const randomIndex = Math.floor(Math.random() * colorSchemes.length);
  return colorSchemes[randomIndex];
};

const App = () => {
  const [colorScheme, setColorScheme] = useState(getRandomColorScheme);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const sidebarRef = useRef(null);

  // Update CSS custom properties for Tailwind classes
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--color-text", colorScheme.text);
    root.style.setProperty("--color-background", colorScheme.background);
    root.style.setProperty("--color-primary", colorScheme.primary);
    root.style.setProperty("--color-secondary", colorScheme.secondary);
    root.style.setProperty("--color-accent", colorScheme.accent);
  }, [colorScheme]);

  // Function to change the color scheme
  const changeColorScheme = () => {
    setColorScheme(getRandomColorScheme());
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  //* Animations
  gsap.registerPlugin(useGSAP);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay was prevented:", error);
      }
    };
    playVideo();
  }, []);

  // Handle clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      (!buttonRef.current || !buttonRef.current.contains(event.target))
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Seyed Ali Najafi | سید علی نجفی</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="description"
          content="Seyed Ali Najafi - A React and Tailwind Next Typescript Javascript developer building modern web applications."
        />
        <meta
          name="keywords"
          content="Seyed Ali Najafi, Ali Najafi,Najafi, Web Developer, React, Tailwind CSS, Portfolio, سید علی نجفی, علی نجفی,برنامه نویسی وب, فرانت اند, Frontend, programming, next , nuxt , typescript,JavaScript"
        />
        <meta name="author" content="Seyed Ali Najafi | سید علی نجفی" />

        <link rel="canonical" href="https://seyedalinajafi.ir" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="overflow-x-hidden bg-background">
        <div className="h-full 2xl:h-screen">
          <NavBar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            changeColor={changeColorScheme}
            buttonRef={buttonRef}
          />
          <SideBarMobile
            isOpen={isOpen}
            changeColor={changeColorScheme}
            setIsOpen={setIsOpen}
            sidebarRef={sidebarRef}
          />
          <SideBar
            isOpen={isOpen}
            changeColor={changeColorScheme}
            setIsOpen={setIsOpen}
            sidebarRef={sidebarRef}
          />
          <Hero />
          {isDesktop && <AnimationDesktop />}
          {isMobile && <AnimationMobile />}
        </div>
        <Morent />
        <Mizan />
        <Footer />
      </div>
    </div>
  );
};

export default App;
