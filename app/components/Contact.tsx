"use client";

import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const ContactMe = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    message: "",
  });

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

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { fullName, address, message } = formData;
    const email = "mnair5@asu.edu"; // your destination email
    const subject = encodeURIComponent(address); // use address as subject
    const body = encodeURIComponent(`Name: ${fullName}\nMessage:\n${message}`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const boxBg = currentTheme === "dark" ? "#1a1a1a" : "#f0f5ff";
  const textColor = currentTheme === "dark" ? "#fff" : "#171717";
  const labelColor = currentTheme === "dark" ? "#fff" : "#171717";
  const inputBg = currentTheme === "dark" ? "#2a2a2a" : "#ffffff";
  const inputTextColor = currentTheme === "dark" ? "#fff" : "#171717";
  return (
    <section
      id="contact-me"
      className={isMobile ? "" : "fade fadeOut"}
      style={{
        minHeight: "100vh",
        padding: "5px 20px",
        position: "relative",
      }}
    >
      {/* Heading */}
      <Box sx={{ width: isMobile ? "90%" : "70%", paddingBottom: "20px" }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: textColor }}>
            Contact Me
          </Typography>
          <Typography variant="subtitle1" mt={1} sx={{ color: textColor }}>
            I am currently open to fulltime, contract or internship
            opportunities
          </Typography>
        </Box>

        {/* Contact Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: boxBg,
            borderRadius: 3,
            padding: isMobile ? 1 : 4, // bigger padding on mobile
            gap: isMobile ? 1 : 4, // more space between items on mobile
            margin: "0 auto",
            width: isMobile ? "98% !important" : "70%", // almost full width on mobile
            boxShadow:
              currentTheme === "dark"
                ? "rgba(0, 0, 0, 0.5) 0px 4px 12px"
                : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          {/* Left Side: Contact Info */}

          {/* Left Side: Contact Info */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "18px", color: textColor }}>
                Have an awesome project idea?
              </Typography>
              <Typography sx={{ fontSize: "18px", color: textColor }}>
                Let's discuss
              </Typography>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "50px",
                  gap: 3,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        currentTheme === "dark" ? "#000" : "#fff",
                    }}
                  >
                    <EmailOutlinedIcon
                      sx={{
                        color: "#888",
                        fontSize: 22, // smaller size
                        strokeWidth: 0.8,
                      }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ color: textColor }}>
                    mnair5@asu.edu
                  </Typography>
                </Box>

                {/* Phone */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        currentTheme === "dark" ? "#000" : "#fff",
                    }}
                  >
                    <PhoneOutlinedIcon
                      sx={{
                        color: "#888",
                        fontSize: 22, // smaller size
                        strokeWidth: 0.8,
                      }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ color: textColor }}>
                    +1 (602)7068562
                  </Typography>
                </Box>

                {/* Location */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        currentTheme === "dark" ? "#000" : "#fff",
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{
                        color: "#888",
                        fontSize: 22, // smaller size
                        strokeWidth: 0.8,
                      }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ color: textColor }}>
                    Mesa, Arizona
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* Right Side: Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              padding: 1,
              width: isMobile ? "95%" : "70%",
            }}
          >
            {/* Full Name */}
            <Typography sx={{ color: labelColor, fontWeight: 500, mb: 1 }}>
              Full Name
            </Typography>
            <TextField
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              sx={{
                mb: isMobile ? 1 : 3,
                "& .MuiInputBase-root": {
                  backgroundColor: inputBg,
                  color: inputTextColor,
                  padding: isMobile ? 0 : "auto",
                  fontSize: isMobile ? "0.875rem" : "1rem",
                },
                "& fieldset": { border: "none" },
              }}
            />

            {/* Address */}
            <Typography sx={{ color: labelColor, fontWeight: 500, mb: 1 }}>
              Subject
            </Typography>
            <TextField
              name="address"
              value={formData.address}
              onChange={handleChange}
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  backgroundColor: inputBg,
                  color: inputTextColor,
                },
                "& fieldset": { border: "none" },
              }}
            />

            {/* Message */}
            <Typography sx={{ color: labelColor, fontWeight: 500, mb: 1 }}>
              Message
            </Typography>
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  backgroundColor: inputBg,
                  color: inputTextColor,
                },
                "& fieldset": { border: "none" },
              }}
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                background:
                  currentTheme === "dark"
                    ? "linear-gradient(135deg, #e0e0e0, #ffffff)" // silverish gradient for dark
                    : "linear-gradient(45deg, #000000, #333333)", // black gradient for light
                color: currentTheme === "dark" ? "#000" : "#fff",
                fontWeight: "bold",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: 2,
                // boxShadow:
                //   currentTheme === "dark"
                //     ? "0 0 12px #c0c0c0" // silver glow
                //     : "0 0 12px #000", // black glow
                "&:hover": {
                  //   boxShadow:
                  //     currentTheme === "dark"
                  //       ? "0 0 20px #c0c0c0"
                  //       : "0 0 20px #000",
                  background:
                    currentTheme === "dark"
                      ? "linear-gradient(135deg, #ffffff, #e0e0e0)"
                      : "linear-gradient(45deg, #111, #555)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 4, // space above the box
            py: 1,
            px: 2,
            borderTop: `1px solid ${currentTheme === "dark" ? "#888" : "#000"}`,
            // backgroundColor: currentTheme === "dark" ? "#2a2a2a" : "#dfe6ff",
            color: currentTheme === "dark" ? "#888" : "#171717",
            textAlign: "center",
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <Typography variant="body2">
            Designed and developed by Megha Sudhakaran Nair
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default ContactMe;
