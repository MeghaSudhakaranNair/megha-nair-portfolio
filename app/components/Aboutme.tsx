"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image"; // To use the Image component for optimized loading
import { useState, useEffect } from "react";

const AboutMe = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    // Set theme on mount and observe theme changes dynamically
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setCurrentTheme(theme);
    };

    // Observer for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Initialize theme on first load
    updateTheme();

    return () => observer.disconnect();
  }, []);

  // Define colors per theme
  const backgroundColor = currentTheme === "dark" ? "#1a1a1a" : "#ffffff"; // Darker shade for background
  const textColor = currentTheme === "dark" ? "#ffffff" : "#171717";
  const boxShadow =
    currentTheme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.1)";

  return (
    <section
      id="about-me"
      style={{ backgroundColor, color: textColor, minHeight: "100vh" }}
      className={isMobile ? "" : "fade fadeOut"}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            paddingLeft: { xs: "20px", md: "70px" },
            paddingRight: { xs: "20px", md: "50px" },
          }}
        >
          {/* Left side: Image */}
          <Box
            sx={{
              // flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              overflow: "hidden",
              width: { xs: "150px", md: "400px" },
              height: { xs: "150px", md: "400px" },
              boxShadow: boxShadow,
              border: `1px solid ${
                currentTheme === "dark"
                  ? "rgba(255, 255, 255, 0.5)"
                  : "rgba(0, 0, 0, 0.2)"
              }`,
            }}
          >
            <Image
              src="/megha.jpeg" // Add your image path
              alt="About Me Image"
              width={600}
              height={600}
              objectFit="cover"
              style={{ borderRadius: "50%" }} // Ensure image is circular
            />
          </Box>

          {/* Right side: Text and Technical Skills */}
          <Box
            sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 3 }}
          >
            {/* Paragraph about you */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: textColor,
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                color: textColor,
                textAlign: "left",
                lineHeight: "1.7",
                marginBottom: "5px",
              }}
            >
              I am a full-stack software developer passionate about leveraging
              AI and data-driven solutions to create meaningful, real-world
              impact. My journey began with data analysis and machine learning,
              including internships where I explored predictive modeling,
              statistical analysis, and applied AI to solve practical problems.
              I am driven by the belief that AI can simplify complex processes
              and improve everyday life, and I strive to translate this vision
              into software that is both intuitive and effective.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                color: textColor,
                textAlign: "left",
                lineHeight: "1.7",
                marginBottom: "5px",
              }}
            >
              I co-founded Hailabs, an edtech platform that teaches school kids
              the importance of data and AI through hands-on, interactive
              modules. I developed ML-powered educational tools, allowing
              students to experiment with face recognition, masked-face
              detection, and NLP concepts, making complex AI ideas engaging and
              tangible. Professionally, I have led development at BLUSVN
              Technologies, building the company’s ecosystem including admin,
              driver, and customer applications, overseeing the official
              website, mentoring interns, and contributing to projects like
              eViewIoT, emphasizing scalability, performance, and user
              experience. I follow Agile methodologies and bring end-to-end
              software development expertise: gathering requirements, conducting
              stakeholder meetings, designing Figma prototypes, architecting
              databases and systems, coding with multiple tech stacks, testing,
              releasing, and enhancing products. Curious and adaptable, I am
              always ready to explore new technologies and contribute to
              building impactful solutions.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                color: textColor,
                textAlign: "left",
                lineHeight: "1.7",
                marginBottom: "5px",
              }}
            >
              Academically, I am pursuing a Master of Science in Computer
              Science at Arizona State University, where I have focused on
              Human-Computer Interaction, Software Verification and Testing,
              Data Mining, and Statistical Machine Learning, further
              strengthening my foundation in building intelligent and
              user-centric systems. Beyond development, I have tutored students
              in mathematics and Python, co-founded a Lean In Circle in college,
              organized events for PEHIA, and served as a Google Women
              Techmakers Ambassador, experiences that strengthened my
              leadership, collaboration, and mentorship skills.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                color: textColor,
                textAlign: "left",
                lineHeight: "1.7",
                marginBottom: "10px",
              }}
            >
              I am open to collaboration and can be reached at mnair5@asu.edu or
              +1 (602) 706-8562.
            </Typography>
          </Box>
        </Box>

        {/* Technical Skills */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "10px 100px 100px 100px",
            textAlign: "left",
            flex: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: textColor }}>
            Technical Skills:
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: 2,
            }}
          >
            {/* Example skills */}
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              JavaScript
            </Box>
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              TypeScript
            </Box>
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              React
            </Box>
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Node.js
            </Box>
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Next.js
            </Box>
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              Express
            </Box>
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              MongoDB
            </Box>
            <Box
              sx={{
                padding: "8px",
                backgroundColor:
                  currentTheme === "light" ? "#f0f0f0" : "#000000",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              PostgreSQL
            </Box>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
    </section>
  );
};

export default AboutMe;
