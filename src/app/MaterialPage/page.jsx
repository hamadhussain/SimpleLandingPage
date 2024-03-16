"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import L from "../Layout/page";
import { useEffect, useState } from "react";
import Land from "../Landing/page";
import Load from "../Loading/page";
const Page = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  const [divv, setDiv] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDiv(true);
    }, 1000);
  });
  return (
    <div>
      {divv ? (
        <L>
          <Land />
        </L>
      ):(<Load/>)}
    </div>
  );
};

export default Page;
