// pages/Projects.tsx or the relevant component
import { Box, Typography } from "@mui/material";
import MainCards from "@/app/components/MainCards"; // Adjust the path as necessary
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import FeatureCard from "./FeatureCard";

const Projects = () => {
  // Dummy project data
  const work = [
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
  const featuredprojects = [
    {
      title: "Weather View",
      description:
        "An interactive web application designed to deliver personalized weather information at your fingertips. Utilizing Angular for the client-side, and Node.js, Express.js, and MongoDB for the server-side, WeatherView offers a seamless experience for users seeking real-time weather updates and forecasts.",
      image: "/Weatherview.svg",
      tools: "React, Node.js, MongoDB",
      githubLink: "https://github.com/yourusername/dr-meet",
      features: [
        "Utilized third party API and Angular for fetching and displaying real-time weather data, enhancing user engagement with accurate updates.",
        "Implemented dynamic graphs with Angular and charting libraries to visualize temperature, humidity, and pressure forecasts, improving user experience through interactive data visualization.",
        "Leveraged Angular Material for developing intuitive UI components for real-time weather updates, forecasts, and data visualization across various devices.",
        "Developed a secure login/signup system with Node.js, Express.js and MongoDB, ensuring user data privacy and personalized access to the weather dashboard.",
      ],
    },
    {
      title: "Agri Predict",
      description:
        "AgriPredict is a platform designed to forecast agricultural productivity by analyzing factors such as temperature, rainfall, humidity, land area, crop type, and season. By comparing current climatic data with optimal growth conditions, it helps farmers anticipate their yield, plan for surplus or shortages, and adopt strategies to maximize crop production and profitability.",
      image: "/agripredict.jpeg",
      tools: "Python, Machine Learning, TensorFlow",
      githubLink:
        "https://github.com/yourusername/agriculture-yield-prediction",
      features: [
        "Designed a user-friendly app for farmers to access and analyze agricultural data, allowing them to make informed decisions for crop planning and management.",
        "Processed and analyzed large-scale agricultural datasets, enabling farmers to make data-driven decisions for crop planning and management, resulting in a 30% increase in crop yield.",
        "Implemented advanced machine learning algorithms, including random forest, linear regression, and LSTM, achieving a 15% increase in accuracy for agricultural yield prediction.",
        "Optimized models using PCA, clustering, correlation matrix, and hyperparameter tuning for best results.",
        "Conducted comprehensive testing and debugging, ensuring the app's functionality and performance across 99% of device configurations and platforms.",
      ],
    },
  ];

  return (
    // <section id="projects" className="fade fadeOut">
    <Box>
      <Box sx={{ padding: "40px", display: "flex", flexDirection: "column" }}>
        {/* Pass the projects data to MainCards component */}
        <MainCards projects={work} />
      </Box>
      <Box
        sx={{
          padding: "20px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Pass the projects data to MainCards component */}
        {/* <Typography
          variant="h4"
          sx={{
            color: "black", // Adjust based on the theme if needed
            textAlign: "center",
            // pl: 3,

            // marginLeft: "70px",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "1.7rem" },
            fontWeight: 400,
          }}
        >
          Project Gallery
        </Typography> */}

        <FeatureCard projects={featuredprojects} />
      </Box>

      <Box sx={{ padding: "40px", display: "flex", flexDirection: "column" }}>
        <ProjectCard />
      </Box>
    </Box>
    // </section>
  );
};

export default Projects;
