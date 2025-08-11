// pages/Projects.tsx or the relevant component
import { Box, Typography } from "@mui/material";
import MainCards from "@/app/components/MainCards"; // Adjust the path as necessary
import { useEffect } from "react";

const Projects = () => {
  // Dummy project data
  const projects = [
    {
      title: "Software Developer",
      from: "June 2024",
      to: "Present",
      image: "/blusvn.jpeg", // Add your image path here
    },
    {
      title: "Software Engineer",
      from: "Aug 2024",
      to: "May 2023",
      image: "/interbiz.jpeg", // Add your image path here
    },
    {
      title: "Software Developer",
      from: "July 2020",
      to: "July 2021",
      image: "/hailabs.png", // Add your image path here
    },
    // Add more projects as needed
  ];

  return (
    // <section id="projects" className="fade fadeOut">
    <Box>
      <Box sx={{ padding: "40px", display: "flex", flexDirection: "column" }}>
        {/* Pass the projects data to MainCards component */}
        <MainCards projects={projects} />
      </Box>

      {/* <Box sx={{ padding: "40px", display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h4"
          sx={{
            color: "black", // Adjust based on the theme
            textAlign: "center",
            marginBottom: "40px",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Projects
        </Typography>

        <MainCards projects={projects} />
      </Box> */}
    </Box>
    // </section>
  );
};

export default Projects;
