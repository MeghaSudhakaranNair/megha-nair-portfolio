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
import { Typography } from "@mui/material";

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
      <Typography
        id="projects"
        variant="h4"
        className="fade fadeOut" // ← observe + fade
        data-aos="fade-up" // ← AOS entrance
        data-aos-delay="120"
        sx={{
          color: "var(--foreground)",
          // color: "black", // Adjust based on the theme if needed

          textDecorationStyle: "revert",
          textAlign: "center",
          p: { xs: 0, sm: 4 },
          mt: { xs: 0, sm: 10 },
          // marginLeft: "70px",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.7rem" },
          fontWeight: 400,
        }}
      >
        Work Experience + Projects
      </Typography>
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
