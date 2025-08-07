"use client";
import Image from "next/image";
import AOS from "aos";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Landing from "./components/Landing";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div>
      <Header />
      <Landing />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
