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
      feature: [
        "•Led a team of 3 developers to design and develop the companyʼs official website and app using Next.js, Material UI, and Capacitor, collaborating in Figma to deliver a responsive, accessible, and brand-aligned experience across web and mobile platforms.",
        "Developed UI and integrated tRPC APIs for core modules such as product management, order management, and chat integration.",
        "Enhanced authentication by resolving SSO issues and implementing biometric authentication with Capacitor Biometrics, improving security, streamlining access, and enabling faster logins.",
        "Optimized LCP by implementing lazy-loading and asset preloading, boosting Lighthouse scores by 15% and improving load times. •Implemented secure private and public routing with next/navigation, improving platform security, structured navigation, and seamless user access across pages.",
      ],
    },
    {
      title: "Software Engineer",
      from: "Aug 2024",
      to: "May 2023",
      image: "/interbiz.jpeg", // Add your image path here
      feature: [
        "Collaborated with clients to gather requirements for an IoT platform, delivering solutions that enhanced satisfaction.",
        "Optimized the heartbeat schema to reduce request-response frequency, improving cost efficiency and streamlining device communication. •Implemented an aggregator schema in Cosmos DB, reducing UI fetch time by 30% and enhancing system performance.",
        "Developed a responsive UI in Angular, implementing features like scheduling, user management, and device monitoring.",
        "Integrated dynamic forms and time zone management for scheduling, ensuring accurate device operations and an intuitive user experience. •Built a feature to request, store, and retrieve device log files using blob storage, enabling efficient downloads reducing redundant requests.",
      ],
    },
    {
      title: "Software Developer",
      from: "July 2020",
      to: "July 2021",
      image: "/hailabs.png", // Add your image path here
      feature: [
        "Conducted research on the most recent AI trends and developed a curriculum with over 27 modules and 12 projects for students in grades 4 through 9.",
        "Facilitated cross-functional collaboration between technical, pedagogy, and ML teams to ensure the seamless integration of AI technologies for an edtech platform for students learn data science and ML in a gamified manner.",
        "Refined ML model accuracy by leveraging Python, TensorFlow, and Keras to build robust data pipelines and optimize algorithms for an intuitive student learning experience.",
        "Engineered and deployed a suite of AI-powered games for a student learning platform, integrating pre-trained FaceNet and BERT models to teach computer vision and natural language processing concepts in a gamified and intuitive way.",
        "Managed collaborative development workflows and maintained code quality by implementing version control with GitHub.",
      ],
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
