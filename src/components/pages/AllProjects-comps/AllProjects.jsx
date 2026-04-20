import React from 'react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const projects = [
    {
    id: 1,
    title: "CareNest - AI-Powered Infant Care AppDeveloped",
    description: "It analyzes baby cries in real-time and tracks health and growth. It also provides vaccination reminders and a bilingual chatbot.The app helps parents manage infant care easily and confidently.",
    technologies: "Using Flutter, Dart, Firebase, Dio, and Retrofit with Clean Architecture. Used Cubit for state management and get_it for dependency injection.",
    src: "/images/projectsImages/CareNestApp.png",
    code: "https://github.com/NadaKenawy/CareNest-App-GraduationProject",
  },

  {
    id: 2,
    title: "ORB – Smart Learning Marketplace",
    description:
      "A smart learning platform where students can request lessons and receive offers from tutors, negotiate prices in real-time, and join live sessions inside the app. It provides a seamless educational experience with chat, meetings, and secure payments.",
    src: "/images/projectsImages/ORBApp.png",
    code: "",
  },
    {
    id: 3,
    title: "Rafiq – Volunteer & Assistance Mobile App",
    description:
      "A community-based mobile application that connects people in need with nearby volunteers for real-time assistance and support.",
    src: "/images/projectsImages/RafikApp.png",
    code: "https://github.com/NadaKenawy/Rafik-App",
  },
    {
    id: 4,
    title: "Sheftaya – Daily Work Marketplace",
    description:
      "A mobile application that connects business owners with people seeking flexible daily work. Each shift includes clear details and real reviews, ensuring transparency and safety for both parties with secure financial handling.",
    src: "/images/projectsImages/SheftayaApp.png",
    code: "",
  },
  {
    id: 5,
    title: "UniVerse – University Management App",
    description:
      "A comprehensive university app that allows students to register courses, track attendance through QR scanning, monitor absence percentage, view lectures and schedules, submit issues to student affairs, and interact with a chatbot for assistance.",
    src: "/images/projectsImages/UniverseApp.png",
    code: "https://github.com/NadaKenawy/UniVerse",
  },

  {
    id: 6,
    title: "Furniture E-commerce App",
    description:
      "A furniture e-commerce mobile application featuring product listings, detailed views, and a smooth shopping flow, designed with a clean UI and scalable architecture.",
    src: "/images/projectsImages/FurnitureE-CommerceApp.png",
    code: "https://github.com/NadaKenawy/Final_Project_Furniture_App",
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
