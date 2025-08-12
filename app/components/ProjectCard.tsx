"use client";

import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  title: string;
  description: string;
  image: string;
  tools: string;
  githubLink: string;
}

interface ProjectCardsProps {
  projects: Project[];
}

const ProjectCards = ({ projects }: ProjectCardsProps) => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  // Set theme on mount and observe theme changes dynamically
  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setCurrentTheme(theme);
      console.log("Current theme:", theme);
    };

    const observer = new MutationObserver(() => {
      updateTheme(); // Update theme when it changes
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    updateTheme();

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
    if (typeof window === "undefined") return;

    const fadeOutElements = document.querySelectorAll(".fade-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.add("fadeOut");
          } else {
            entry.target.classList.remove("fadeOut");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeOutElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const backgroundColor = currentTheme === "dark" ? "#0a0a0a" : "#ffffff";
  const textColor = currentTheme === "dark" ? "#ffffff" : "#171717";

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        justifyContent: "flex-begin",
        gap: 4,
        pl: { sm: 1, md: 10 },
        pr: { sm: 1, md: 14 },
        backgroundColor,
        color: textColor,
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            flexShrink: 0,
            flexBasis: { xs: "100%", sm: "45%", md: "30%" },
            display: "flex",
            justifyContent: "flex-begin",
            flexDirection: "row",
          }}
        >
          <Card
            className="fade-card"
            sx={{
              width: 400,
              backgroundColor: currentTheme === "dark" ? "#333" : " #1580f826",
              color: currentTheme === "dark" ? "#fff" : "#000",
              borderRadius: "20px",
              boxShadow: "none",
              padding: "10px",
              display: "flex",
              flexDirection: "row",
            }}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-anchor-placement="top-bottom"
          >
            {/* Image Section */}
            <Box
              sx={{
                width: "20%",
                height: "100px",
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px 0 0 20px",
              }}
            ></Box>

            {/* Text Section */}
            <Box
              sx={{
                padding: "20px",
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: textColor,
                  marginBottom: "10px",
                  fontSize: "18px",
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: textColor,
                  marginBottom: "10px",
                  whiteSpace: "normal", // Allow text to wrap
                  wordWrap: "break-word", // Break long words if necessary
                }}
              >
                {project.description}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: textColor,
                  marginBottom: "10px",
                  whiteSpace: "normal", // Allow text to wrap
                  wordWrap: "break-word", // Break long words if necessary
                }}
              >
                Tools Used: {project.tools}
              </Typography>
              {/* <Button
                variant="contained"
                color="primary"
                href={project.githubLink}
                target="_blank"
                sx={{
                  alignSelf: "flex-start",
                  marginTop: "auto",
                }}
              >
                View on GitHub
              </Button> */}
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectCards;
