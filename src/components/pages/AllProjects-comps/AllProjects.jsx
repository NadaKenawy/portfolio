import React from 'react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'CareNest App',
      description: 'CareNest is an AI-powered mobile application designed to support new parents. It features real-time baby cry analysis, health and growth tracking, vaccination reminders, and a bilingual chatbot that provides guidance and tips for infant care. The app aims to enhance parental confidence and streamline baby care management.',
      src: '/images/projectsImages/CareNestApp.png',
      code: 'https://github.com/NadaKenawy/CareNest-App-GraduationProject',
    },
    {
      id: 2,
      title: 'ٌRafik Application',
      description: '"A community-based mobile application that connects people in need with nearby volunteers for real-time assistance and support.',
      src: '/images/projectsImages/RafikApp.png',
      code: 'https://github.com/NadaKenawy/Rafik-App',
    },
    {
      id: 3,
      title: 'Furniture E-commerce App',
      description: 'A furniture e-commerce mobile application featuring product listings, detailed views, and a smooth shopping flow, designed with a clean UI and scalable architecture.',
      src: '/images/projectsImages/FurnitureE-CommerceApp.png',
      code: 'https://github.com/NadaKenawy/Final_Project_Furniture_App',
    },
    {
    id: 4,
    title: "Bookly App",
    description:
      "A modern book rental and browsing application that allows users to explore available books, view details, and follow a smooth booking experience with an attractive and user-friendly UI.",
    src: "/images/projectsImages/BooklyApp.png",
    code: "https://github.com/NadaKenawy/Bookly_app",
  },
    {
      id: 5,
      title: 'Weather App',
      description: 'A weather forecasting mobile application that provides real-time weather updates, hourly and weekly forecasts, and location-based data using a clean and user-friendly interface.',
      src: '/images/projectsImages/WeatherApp.png',
      code: 'https://github.com/NadaKenawy/Weather-App',
    },
     {
    id: 6,
    title: "Chat App",
    description:
      "A real-time chat application that allows users to send and receive messages instantly, manage conversations, and interact through a clean and intuitive UI, powered by Firebase Auth and Firestore.",
    src: "/images/projectsImages/ChatApp.png",
    code: "https://github.com/NadaKenawy/Chat-App",
  },

  ];

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-white md:min-h-screen mt-24 mb-20"
    >
      <div className="max-w-screen-xl px-4 mx-auto flex flex-col justify-center">
        {/* Header */}
        <div className="pb-10">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            Projects
          </h2>
          <p className="py-6 text-gray-300">
            A selection of my best projects suitable for production & portfolios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map(({ id, title, description, src, code }) => (
            <div
              key={id}
              className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden group"
            >
              {/* Image Wrapper */}
              <div className="w-full aspect-[840/672] overflow-hidden">
                <img
                  loading="lazy"
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {description}
                </p>

                <button
                  onClick={() => openInNewTab(code)}
                  className="px-6 py-2 rounded-md bg-gradient-to-r from-primary-color to-green-400 text-black font-semibold hover:scale-110 transition-transform duration-300"
                >
                  View Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-24">
        <Link
          to="/"
          className="text-black font-semibold text-[16px] px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-green-400 to-primary-color hover:scale-110 transition-transform duration-300"
        >
          <i className="bx bx-home-heart mr-2"></i>
          Go back
        </Link>
      </div>
    </section>
  );
};

export default AllProjects;
