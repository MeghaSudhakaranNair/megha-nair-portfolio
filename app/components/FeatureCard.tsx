"use client";

import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { Julee } from "next/font/google";
const julee = Julee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-julee",
});

interface Project {
  title: string;
  description: string;
  image: string;
  tools: string;
  githubLink: string;
  // Optional array of bullet points
  features?: string[];
}

interface FeatureCardsProps {
  projects: Project[];
}

const FeatureCards = ({ projects }: FeatureCardsProps) => {
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

  // Colors per theme
  const backgroundColor = currentTheme === "dark" ? "#0a0a0a" : "#ffffff";
  const cardBg = currentTheme === "dark" ? "#1f1f1f" : "#1580f826";
  const textColor = currentTheme === "dark" ? "#ffffff" : "#171717";
  const shadow =
    currentTheme === "dark"
      ? "0 6px 18px rgba(0,0,0,0.35)"
      : "0 6px 16px rgba(22,34,51,0.12)";
  const shadowHover =
    currentTheme === "dark"
      ? "0 10px 24px rgba(0,0,0,0.45)"
      : "0 12px 28px rgba(22,34,51,0.18)";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // stack cards vertically
        gap: 3,
        px: { xs: 2, sm: 3, md: 10 },
        py: { xs: 2, sm: 3, md: 4 },
        backgroundColor,
        color: textColor,
        width: "100%",
      }}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          className="fade-card"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          sx={{
            width: "100%", // full width
            borderRadius: "10px",

            // backgroundColor:
            //   currentTheme === "dark"
            //     ? "rgba(31, 31, 31, 0.6)" // dark translucent
            //     : "rgba(21, 128, 248, 0.1)", // light translucent
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

            boxShadow: shadow,
            transition: "transform 200ms ease, box-shadow 200ms ease",

            color: textColor,
            overflow: "hidden",
            pl: 2,
            pr: 2,
          }}
        >
          {/* Top image banner */}

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: textColor, fontWeight: 600, letterSpacing: 0.2 }}
            >
              {project.title}
            </Typography>

            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                color: textColor,
                whiteSpace: "normal",
                wordWrap: "break-word",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              {project.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 4,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "250px", md: "300px" },
                  height: { xs: 160, sm: 220 },
                  backgroundImage: `url(${project.image})`,
                  borderRadius: "8px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Bullet points (features) */}
              {project.features && project.features.length > 0 && (
                <Box
                  component="ul"
                  sx={{
                    pl: 3,
                    my: 0,
                    listStyleType: "disc", // Ensure bullet points are visible
                    color: textColor,
                  }}
                >
                  {project.features.map((feat, i) => (
                    <Box
                      key={i}
                      component="li"
                      sx={{
                        color: textColor,
                        fontSize: "0.85rem",
                        lineHeight: 1.8,
                        "&::marker": { fontSize: "1rem" },
                      }}
                    >
                      {feat}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            <Box sx={{ mt: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1, // space between pills
                }}
              >
                {project.tools.split(",").map((toolRaw, i) => {
                  const tool = toolRaw.trim();
                  const pillBg =
                    currentTheme === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.06)";
                  const pillBorder =
                    currentTheme === "dark"
                      ? "rgba(255,255,255,0.18)"
                      : "rgba(0,0,0,0.12)";
                  const pillText =
                    currentTheme === "dark" ? "#ffffff" : "#171717";

                  return (
                    <Box
                      key={`${tool}-${i}`}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 9999, // full oval
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        backgroundColor: pillBg, // lighter than card bg
                        color: pillText,
                        border: `1px solid ${pillBorder}`,
                        lineHeight: 1, // tighter vertical rhythm
                      }}
                    >
                      {tool}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FeatureCards;
