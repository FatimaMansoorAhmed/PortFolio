"use client";
import React from "react";
import Image from "next/image"; 

import darbar from "../../public/Assets/Images/darbar.webp"; 
import AI from '../../public/Assets/Images/AI.webp'
import talentmtch from '../../public/Assets/Images/talentmatch.webp'
import Weather from '../../public/Assets/Images/Weather.webp'
import train from '../../public/Assets/Images/train.webp'
import airline from '../../public/Assets/Images/airline.webp'
import churn from '../../public/Assets/Images/churn.webp'

export default function Project({ id }) {
  const projects = [
    {
      image: AI,
      name: "AI Resume Analyzer Trained Model (Python) ",
      desc: "Built and trained a machine learning model for automated resume analysis and classification.",
      live: "https://github.com/FatimaMansoorAhmed/Resume_Analyzer.git",
    },
    {
      image: train,
      name: "Airlines Management Trained Model (Python) ",
      desc: "Designed and trained a machine learning model to analyze airline management data.",
      live: "https://github.com/FatimaMansoorAhmed/Airlines_ML_TRAINEDMODEL.git",
    },
    {
      image: talentmtch,
      name: "Job Portal (React + Firebase) ",
      desc: "Developed a full-stack web application to manage job postings and user interactions. Utilized Firebase services for authentication,database management ",
      live: "https://job-portal-final-cgnk.vercel.app ",
    },
    {
      image: churn,
      name: "Customer Churn Prediction System",
      desc: "The Customer Churn Prediction System is a machine learning-based application designed to predict whether a customer is likely to stop using a company’s product or service.",
      live: "https://github.com/FatimaMansoorAhmed/Customer_Churn_Prediction_System.git",
    },
   
    {
      image: darbar,
      name: "Savoury Hub",
      desc: "Developed an interactive restaurant website  Utilized JavaScript and jQuery to implement interface responsiveness.",
      live: "https://earnest-pudding-f4a9d9.netlify.app ",
    },
    {
      image: Weather,
      name: "Weather Checker (React) ",
      desc: "Developed a real-time weather information system using React and external API services..",
      live: "https://weather-app-bice-nine-35.vercel.app  ",
    },
    {
      image: airline,
      name: "Airline Management System Using SQL Server ",
      desc: "Developed a database driven system to manage airline operational data",
      live: "https://drive.google.com/file/d/139zoXkonPyhqiJ6IDULB-PkFnO7qL08q/view ",
    },
   
  ];

  return (
    <section id={id} className="px-5 py-16 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-white text-5xl font-serif mb-4 text-center max-sm:text-5xl">My Projects</h2>

        {/* Description */}
        <p className="text-gray-300 font-serif text-center w-full md:w-2/3 mb-12">
          Here are some of my frontend, full-stack, AI/ML development projects.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
          {projects.map((project, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl hover:scale-105 duration-500 text-center"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="rounded-xl mb-4 w-full h-64 object-cover hover:opacity-70 duration-500"
              />
              <h3 className="text-white font-serif text-xl font-medium mb-2">{project.name}</h3>
              <p className="text-gray-300 font-serif mb-4">{project.desc}</p>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-[#DAA760] underline"
                >
                  Preview
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
