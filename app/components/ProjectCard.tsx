"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

type SimpleProject = {
  name: string;
  description: string;
  href?: string;
};

const projectsData: SimpleProject[] = [
  {
    name: "FileFlow",
    description:
      "Lightweight file organizer with quick upload, tagging, and sharing.",
    href: "https://github.com/MeghaSudhakaranNair/FileFlow",
  },
  {
    name: "Drowsiness Detection",
    description:
      "Real-time driver alert using webcam cues and threshold-based triggers.",
    href: "https://github.com/meghasn/drowsiness-detection",
  },
  {
    name: "Wound Sensor",
    description:
      "IoT prototype for monitoring wound healing metrics from low-power sensors.",
    href: "https://github.com/meghasn/wound_sensor",
  },
  {
    name: "Student Score Predictor",
    description:
      "Model that estimates exam scores from study patterns and prior performance.",
    href: "https://github.com/meghasn/student_pred",
  },
];

const ProjectCards = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setCurrentTheme(theme);
    };
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    updateTheme();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }
  }, []);

  const isDark = currentTheme === "dark";
  const cardBg = isDark ? "rgba(31,31,31,0.6)" : "rgba(21,128,248,0.1)";
  const textColor = isDark ? "#fff" : "#171717";
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const shadow = isDark
    ? "0 6px 18px rgba(0,0,0,0.35)"
    : "0 6px 16px rgba(22,34,51,0.12)";
  const shadowHover = isDark
    ? "0 10px 24px rgba(0,0,0,0.45)"
    : "0 12px 28px rgba(22,34,51,0.18)";

  return (
    <Box
      sx={{
        // ✅ Grid, not flex — no horizontal scroll
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", // phones: 1 column
          sm: "repeat(2, 1fr)", // tablets: 2 columns
          md: "repeat(3, 1fr)", // small desktops: 3 columns
          lg: "repeat(4, 1fr)", // large screens: 4 columns
        },
        gap: 3,
        px: { xs: 2, md: 6 },
        // py: { xs: 1, md:  },
        maxWidth: 1400,
        mx: "auto",
      }}
    >
      {projectsData.map((proj, i) => (
        <Card
          key={proj.name + i}
          className="fade-card"
          data-aos="fade-up"
          data-aos-delay={`${i * 100}`}
          sx={{
            width: "100%", // fill grid cell
            height: "100%",
            minHeight: { xs: 140, sm: 160 },
            borderRadius: "10px",
            overflow: "hidden",
            // backgroundColor: cardBg,
            backgroundColor:
              currentTheme === "dark"
                ? "rgba(17,17,17,0.6)"
                : "rgba(255,255,255,0.6)",

            // ✅ Gradients must go in backgroundImage (not backgroundColor)
            backgroundImage:
              currentTheme === "dark"
                ? "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(59,130,246,0.10) 40%, rgba(221,214,254,0.16) 85%)"
                : "linear-gradient(135deg, rgba(21,128,248,0.10), rgba(147,197,253,0.12) 45%, rgba(221,214,254,0.16) 90%)",

            // Optional: blend the gradient with the base color a bit more
            backgroundBlendMode: "overlay",

            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: textColor,
            // border: `1px solid ${borderColor}`,
            boxShadow: shadow,
            transition: "transform 200ms ease, box-shadow 200ms ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: shadowHover,
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardActionArea
            component={proj.href ? "a" : "div"}
            href={proj.href}
            target={proj.href ? "_blank" : undefined}
            rel={proj.href ? "noopener noreferrer" : undefined}
            sx={{ height: "100%", display: "flex", alignItems: "stretch" }}
            aria-label={proj.name}
          >
            <CardContent
              sx={{
                p: { xs: 2, sm: 2.5 },
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: textColor, letterSpacing: 0.2 }}
              >
                {proj.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: textColor,
                  opacity: 0.9,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {proj.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectCards;
