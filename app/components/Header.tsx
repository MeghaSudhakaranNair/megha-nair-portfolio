"use client";

import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const Header = () => {
  // Use 'dark' | 'light' for the theme state
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Load the saved theme from localStorage or default to dark theme
  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          theme === "dark"
            ? "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))" // Dark theme gradient
            : "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))", // Light theme gradient
        boxShadow: "none", // Remove the default box shadow
      }} // Transparent header with no shadow
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={theme === "dark" ? "/MSN.svg" : "/MSN-dark.svg"}
            alt="Logo"
            width={100}
            height={50}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Button
            href="#home"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "var(--foreground)",
            }}
          >
            Home
          </Button>
          <Button
            href="#projects"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "var(--foreground)",
            }}
          >
            Projects
          </Button>
          <Button
            href="#about-me"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },

              color: "var(--foreground)",
            }}
          >
            About Me
          </Button>
          <Button
            href="#contact"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "var(--foreground)",
            }}
          >
            Contact Us
          </Button>
          <Button
            href="/resume"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "var(--foreground)",
            }}
          >
            Download Resume
          </Button>
          <IconButton
            onClick={toggleTheme}
            sx={{ marginLeft: 2, color: "var(--foreground)" }}
          >
            {theme === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
