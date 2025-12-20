import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-xl max-w-md mx-auto overflow-hidden bg-[#0f172a]">
      
      {/* Image Wrapper */}
      <div
        onClick={() => handleModalInfo(project)}
        className="w-full aspect-[800/900] overflow-hidden cursor-pointer"
      >
        <img
          src={project.src}
          alt="project card"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Button */}
      <div className="flex items-center justify-center p-3">
        <button
          onClick={() => openInNewTab(project.code)}
          className="px-6 py-2 rounded-md bg-gradient-to-r from-primary-color to-green-400 text-black font-semibold hover:scale-110 transition-transform duration-300"
        >
          View Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
