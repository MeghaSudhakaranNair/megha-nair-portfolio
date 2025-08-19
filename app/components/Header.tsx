"use client";

import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { LightMode, DarkMode, Download } from "@mui/icons-material";

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

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            onClick={() => handleScroll("home")}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "var(--foreground)",

              "&:hover": {
                backgroundColor: "transparent", // remove default hover background
                color: theme === "dark" ? "#ffffff" : "#171717", // match theme foreground
              },
              "&:focus": {
                backgroundColor: "transparent",
                color: theme === "dark" ? "#ffffff" : "#171717",
              },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => handleScroll("projects")}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "var(--foreground)",
              "&:hover": {
                backgroundColor: "transparent", // remove default hover background
                color: theme === "dark" ? "#ffffff" : "#171717", // match theme foreground
              },
              "&:focus": {
                backgroundColor: "transparent",
                color: theme === "dark" ? "#ffffff" : "#171717",
              },
            }}
          >
            Projects
          </Button>
          <Button
            onClick={() => handleScroll("about-me")}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },

              color: "var(--foreground)",
              "&:hover": {
                backgroundColor: "transparent", // remove default hover background
                color: theme === "dark" ? "#ffffff" : "#171717", // match theme foreground
              },
              "&:focus": {
                backgroundColor: "transparent",
                color: theme === "dark" ? "#ffffff" : "#171717",
              },
            }}
          >
            About Me
          </Button>

          <Button
            href="/MeghaSudhakaranNair.pdf" // path in the public folder
            download // triggers file download
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              color: "var(--foreground)",
              alignItems: "center",
              gap: 1,

              "&:hover": {
                backgroundColor: "transparent",
                color: theme === "dark" ? "#ffffff" : "#171717",
              },
            }}
          >
            Resume
            <Download fontSize="small" />
          </Button>
          <IconButton
            onClick={toggleTheme}
            sx={{ marginLeft: 2, color: "var(--foreground)" }}
          >
            {theme === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
      {/* Floating Resume Button for Mobile */}
      <Button
        href="/MeghaSudhakaranNair.pdf"
        download
        variant="contained"
        color="primary"
        endIcon={<Download />}
        sx={{
          display: { xs: "flex", sm: "flex", md: "none" }, // only show on mobile
          position: "fixed",
          bottom: 34,
          right: 16,
          zIndex: 2000, // above everything else
          borderRadius: "50px",
          paddingX: 3,
          paddingY: 1.5,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          backgroundColor: theme === "dark" ? "#ffffff" : "#171717", // change bg by theme
          color: theme === "dark" ? "#171717" : "#ffffff", // change text by theme
          "&:hover": {
            backgroundColor: theme === "dark" ? "#e0e0e0" : "#333333",
          },
        }}
      >
        Resume
      </Button>
    </AppBar>
  );
};

export default Header;
