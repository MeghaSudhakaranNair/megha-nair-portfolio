"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Landing from "./components/Landing";

export default function Home() {
  useEffect(() => {
    // Initialize AOS for animations (optional)
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Intersection Observer options
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Trigger when 70% of the element is visible
    };

    // Observer callback function
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element is in view, add fadeIn class
          entry.target.classList.replace("fadeOut", "fadeIn");
        } else {
          // When the element is out of view, add fadeOut class
          entry.target.classList.replace("fadeIn", "fadeOut");
        }
      });
    };

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Select all elements with the 'fade' class and start observing them
    const fadeElms = document.querySelectorAll(".fade");
    fadeElms.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div>
      <Header />
      <Landing />
      {/* <Projects /> */}
      {/* <AboutMe /> */}
      {/* <Contact /> */}
    </div>
  );
}
