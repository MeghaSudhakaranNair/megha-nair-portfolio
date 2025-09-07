"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
interface Project {
  title: string;
  from: string;
  to: string;
  image: string;
  feature: string[];
}

interface MainCardsProps {
  projects: Project[];
}

const MainCards = ({ projects }: MainCardsProps) => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isExpand, setIsExpanded] = useState<boolean>(false);
  const expandedCardRef = useRef<HTMLDivElement>(null);
  const [componentKey, setComponentKey] = useState(0);
  // Set theme on mount and observe theme changes dynamically
  useEffect(() => {
    // Function to update theme
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setCurrentTheme(theme);
      console.log("Current theme:", theme); // Log the current theme
      setComponentKey((prevKey) => prevKey + 1);
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
  }, [isExpand]);

  // Define background and text color based on the current theme
  const backgroundColor = currentTheme === "dark" ? "#0a0a0a" : "#ffffff";
  const textColor = currentTheme === "dark" ? "#ffffff" : "#171717";
  const borderStyle = currentTheme === "light" ? "1px solid #dcdcdc" : "none";
  const borderColor =
    currentTheme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const shadow =
    currentTheme === "dark"
      ? "0 6px 18px rgba(0,0,0,0.35)"
      : "0 6px 16px rgba(22,34,51,0.12)";
  const shadowHover =
    currentTheme === "dark"
      ? "0 10px 24px rgba(0,0,0,0.45)"
      : "0 12px 28px rgba(22,34,51,0.18)";
  const handleExpandClick = (index: number) => {
    setExpandedCard(index);
    setIsExpanded(true);
    if (window.innerWidth <= 900) {
      // Only scroll on smaller screens
      setTimeout(() => {
        if (expandedCardRef.current) {
          expandedCardRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500); // The delay should match the Collapse timeout
    }
  };

  const expandedProject =
    expandedCard !== null
      ? projects[expandedCard]
      : { title: "", from: "", to: "", image: "", feature: [] };
  return (
    <Box
      key={componentKey}
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
            onClick={() => handleExpandClick(index)}
            className="fade-card"
            sx={{
              width: 300,

              backgroundColor:
                currentTheme === "dark"
                  ? "rgba(17,17,17,0.6)"
                  : "rgba(255,255,255,0.6)",

              backgroundBlendMode: "overlay",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              color: currentTheme === "dark" ? "#fff" : "#000",
              borderRadius: "10px",
              // border: `1px solid ${borderColor}`,
              boxShadow: shadow,
              transition: "transform 200ms ease, box-shadow 200ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: shadowHover,
              },

              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                opacity: 0,
                borderRadius: "10px",
                transition: "opacity 200ms ease",
                // Define your hover gradient here
                background:
                  currentTheme === "dark"
                    ? "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(59,130,246,0.10) 40%, rgba(221,214,254,0.16) 85%)"
                    : "linear-gradient(135deg, rgba(21,128,248,0.10), rgba(147,197,253,0.12) 45%, rgba(221,214,254,0.16) 90%)",
              },
              // The hover state that changes the pseudo-element's opacity
              "&:hover::after": {
                opacity: 0.5,
              },

              // padding: "25px 15px 15px 15px",
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
                borderRadius: "10px 10px 0px 0px",
              }}
            />
            <CardActionArea>
              <CardContent
                sx={{
                  borderRadius: "none !important",
                  background:
                    currentTheme === "dark"
                      ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(17,17,17,0.5) 20%, rgba(96,165,250,0.10) 100%)"
                      : "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 20%, rgba(21,128,248,0.08) 100%)",
                }}
              >
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
            </CardActionArea>
          </Card>
        </Box>
      ))}
      <Collapse
        className="fade-card"
        in={isExpand}
        timeout={{ enter: 500, exit: 500 }}
        unmountOnExit
      >
        <Box
          ref={expandedCardRef}
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            maxWidth: "1080px",
            margin: "0 auto", // Center the box
            p: 4,
            borderRadius: "10px",
            boxShadow: shadow,
            backgroundColor:
              currentTheme === "dark"
                ? "rgba(140,183,242,0.1)"
                : "rgba(187,211,247,0.1)",
            backgroundBlendMode: "overlay",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: currentTheme === "dark" ? "#fff" : "#000",
            transition: "transform 200ms ease, box-shadow 200ms ease",
            "@keyframes draw-border": {
              "0%": {
                width: "0%",
                height: "2px",
                top: 0,
                right: 0,
              },
              "25%": {
                width: "100%",
                height: "2px",
                top: 0,
                right: 0,
              },
              "50%": {
                width: "2px",
                height: "100%",
                top: 0,
                right: 0,
              },
              "75%": {
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
              },
              "100%": {
                width: "2px",
                height: "100%",
                top: 0,
                left: 0,
              },
            },

            "&:hover": {
              boxShadow: shadowHover,
            },

            "&:before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "10px", // Use a static value or a variable
              padding: "1px",
              animation: "aurora 5s linear infinite",

              background:
                currentTheme === "dark"
                  ? "linear-gradient(100deg,rgba(0,0,0,0) 0%, rgb(65, 134, 246) 20%, rgb(179, 202, 248) 40%, rgb(230, 238, 251) 60%, rgba(0,0,0,0) 100%)"
                  : "linear-gradient(100deg, rgb(174, 197, 242) 0%, rgb(179, 202, 248) 20%, rgb(255,255,255) 40%, rgba(255,255,255) 60%, rgba(255,255,255) 100%)",

              backgroundSize: "300% 300%",

              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              // Z-index to place the border behind the content
              zIndex: -1,
              "@keyframes aurora": {
                "0%": {
                  backgroundPosition: "0% 50%",
                },
                "100%": {
                  backgroundPosition: "200% 50%",
                },
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: textColor, mb: 2, fontWeight: "bold" }}
            >
              {expandedProject?.title}
            </Typography>
            <IconButton
              onClick={() => setIsExpanded(false)}
              sx={{ color: textColor }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{ color: textColor, mb: 1, fontWeight: "bold" }}
          >
            Key Contributions:
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 2, listStyleType: "disc", color: textColor }}
          >
            {expandedProject?.feature.map((feature: any, i: any) => (
              <Box component="li" key={i} sx={{ mb: 1 }}>
                <Typography variant="body2">{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MainCards;
