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
      sx={{ backgroundColor: "transparent", boxShadow: "none" }} // Transparent header with no shadow
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="/images/logo-placeholder.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button href="#home" sx={{ color: "var(--foreground)" }}>
            Home
          </Button>
          <Button href="#projects" sx={{ color: "var(--foreground)" }}>
            Projects
          </Button>
          <Button href="#about-me" sx={{ color: "var(--foreground)" }}>
            About Me
          </Button>
          <Button href="#contact" sx={{ color: "var(--foreground)" }}>
            Contact Us
          </Button>
          <Button href="/resume" sx={{ color: "var(--foreground)" }}>
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
