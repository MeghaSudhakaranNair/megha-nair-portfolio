import { AuroraBackground } from "@/app/components/Aurora";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Home = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  // Set theme on mount
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setCurrentTheme(theme);

    // Observe changes to theme (if it's dynamically changing)
    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.getAttribute("data-theme");
      setCurrentTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Cleanup observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  // Set text color based on theme
  const textColor = currentTheme === "dark" ? "white" : "black";
  const socialLinks = [
    {
      icon: <GitHub />,
      link: "https://github.com/MeghaSudhakaranNair", // Replace with your GitHub URL
    },
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/megha-sudhakaran-nair", // Replace with your LinkedIn URL
    },
    {
      icon: <Email />,
      link: "mailto:mnair5@asu.edu", // Replace with your email
    },
  ];

  return (
    <AuroraBackground showRadialGradient={true}>
      <section id="home" className="fade fadeOut">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "20px",
              color: textColor,
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
            }}
          >
            Hi, I am{" "}
            <span style={{ fontWeight: "700" }}>Megha Sudhakaran Nair</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "40px",
              color: textColor,
              textAlign: "center",
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
              padding: { xs: "0 10px", sm: "0 20px" },
            }}
          >
            I am a full-stack developer, turning ideas into real-world
            applications with a focus on performance, usability, and modern
            technologies.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            {socialLinks.map(({ icon, link }, index) => (
              <IconButton
                key={index}
                href={link}
                target="_blank"
                sx={{
                  backgroundColor: currentTheme === "dark" ? "#fff" : "#000",
                  color: currentTheme === "dark" ? "#000" : "#fff",

                  borderRadius: "50%",
                  padding: "12px",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: currentTheme === "dark" ? "#444" : "#bbb",
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </section>
    </AuroraBackground>
  );
};

export default Home;
