import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
function Mizan() {
  const [copied, setCopied] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 780px)" });
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".blue", { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#container2",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("https://mizan-app.ir/").then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Revert back to original after 2 seconds
      },
      (err) => {
        console.error("Failed to copy text:", err);
      }
    );
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.7, // Play when 50% of the video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div id="morent">
      <div id="container2">
        <div className="h-screen relative">
          <img
            className="h-screen w-full object-cover blur-sm hidden md:block"
            src="/assets/mizan-ss.png"
            alt=""
          />
          <img
            className="h-screen w-full object-cover blur-sm block md:hidden"
            src="/assets/mizan-ss-mobile.jpeg"
            alt=""
          />
          <div className="absolute flex flex-col gap-y-16 md:gap-y-24 w-full h-full items-center justify-center top-0 left-0 ">
            <p className="persian font-bold text-6xl md:text-8xl text-[#38bac8]">
              میزان
            </p>
            <div className="bg-primary rounded-lg flex flex-row p-3 items-center ">
              <span className="flex flex-row gap-x-1">
                <p className="morent font-bold text-xl text-[#38bac8]">M</p>
                <hr className="mx-2 border-0 border-l-2 h-auto border-[#c5cada]" />
              </span>
              <a
                className="text-white hover:text-accent transition-all duration-150"
                href="https://mizan-app.ir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mizan-app.ir/
              </a>
              <span className="flex flex-row gap-x-1">
                <hr className="mx-2 border-0 border-l-2 h-auto border-[#c5cada]" />
                <button onClick={handleCopy}>
                  {copied ? (
                    <svg
                      className="size-6 text-secondary fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  ) : (
                    <svg
                      className="size-6 text-secondary fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" />
                    </svg>
                  )}
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="h-screen absolute top-0 left-0 w-full translate-[-100%] blue">
          {isDesktop && (
            <video
              className="h-screen w-screen"
              src="https://seyedalinajafi.ir/assets/mizan-video-720.mp4"
              type="video/mp4"
              ref={videoRef}
              muted
              autoPlay
              loop
            ></video>
          )}
          {isMobile && (
            <video
              className="h-screen w-screen"
              src="https://seyedalinajafi.ir/assets/mizan-video-mobile-720.mp4"
              type="video/mp4"
              ref={videoRef}
              muted
              autoPlay
              loop
            ></video>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mizan;
