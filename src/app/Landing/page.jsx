'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {

    // default animation (applies onMouseLeave)
      default: {
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      },
    
    // text animation (applies onMouseEnter) 
      text: {
        height: 150,
        width: 150,
        x: mousePosition.x - 70,
        y: mousePosition.y - 70,
        backgroundColor: "white",
        mixBlendMode: "difference",
      },
    };
    
    // function for textLeave and textEnter
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    
  return (
    <>
      <div className="custom-shape-divider-top-1710572038 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col justify-center p-24 md:p-16 lg:px-40">
        <div
          className="px-4 md:px-6 flex flex-col justify-center items-center"
          data-aos="fade-right"             data-aos-duration="3000"

        >
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} class="text-white uppercase text-lg md:text-2xl lg:text-3xl py-4 font-extrabold font-serif">
            <span>S</span>tandalone <span>L</span>anding <span>P</span>age
          </h1>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="3000"
            className="italic text-slate-300 py-2 text-center"
          >
            In digital marketing, a landing page is a standalone web page,
            created specifically for a marketing or advertising campaign. It’s
            where a visitor “lands” after they click on a link in an email, or
            ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or
            similar places on the web.
          </p>          <center>
            <Image
              src="/Assets/Svgpic.svg"
              width="100"
              height="100"
              alt="SVG Image"
            />
          </center>
          <button className="my-4 md:my-8 p-2 border-white border-2 md:p-4 font-sans font-extrabold  text-white hover:bg-red-500 w-max">
            Explore The Future
          </button>

        </div>
        <motion.div
       className="cursor"
       variants={variants}
       animate={cursorVariant}
     ></motion.div>
     </div>

    </>
  );
}
