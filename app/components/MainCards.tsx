"use client";

import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
interface Project {
  title: string;
  from: string;
  to: string;
  image: string;
}

interface MainCardsProps {
  projects: Project[];
}

const MainCards = ({ projects }: MainCardsProps) => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  // Set theme on mount and observe theme changes dynamically
  useEffect(() => {
    // Function to update theme
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setCurrentTheme(theme);
      console.log("Current theme:", theme); // Log the current theme
    };

    // Initialize observer to watch for changes to the `data-theme` attribute
    const observer = new MutationObserver(() => {
      updateTheme(); // Update theme when it changes
    });

    // Start observing the <html> element for changes in the `data-theme` attribute
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Initial theme load
    updateTheme();

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      console.log("this");
      return;
    } // Avoid running this on server side
    console.log("is itrunning");
    const fadeOutElements = document.querySelectorAll(".fade-card");
    console.log(fadeOutElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Apply the fade-out animation when the element is about to leave
            entry.target.classList.add("fadeOut");
          } else {
            // Remove the fade-out effect when the element comes back into view
            entry.target.classList.remove("fadeOut");
          }
        });
      },
      {
        threshold: 0.1, // Start fading out when 10% of the element is out of view
      }
    );

    fadeOutElements.forEach((el) => observer.observe(el));

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);

  // Define background and text color based on the current theme
  const backgroundColor = currentTheme === "dark" ? "#0a0a0a" : "#ffffff";
  const textColor = currentTheme === "dark" ? "#ffffff" : "#171717";
  const borderStyle = currentTheme === "light" ? "1px solid #dcdcdc" : "none";

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
        pl: { sm: 2, md: 10 },
        pr: { sm: 2, md: 14 },
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            flexBasis: { xs: "100%", sm: "45%", md: "30%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            className="fade-card"
            sx={{
              width: 300,

              //   #a4b3ff26
              backgroundColor: currentTheme === "dark" ? "#333" : " #1580f826",
              color: currentTheme === "dark" ? "#fff" : "#000",
              borderRadius: "20px",
              boxShadow: "none",

              padding: "25px 15px 15px 15px",
            }}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={project.image}
              alt="Project Image"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: textColor,
                  textAlign: "left",
                  marginBottom: "2px",
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: textColor,
                  textAlign: "left",
                  marginBottom: "5px",
                }}
              >
                {project.from} - {project.to}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default MainCards;
