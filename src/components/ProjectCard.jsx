import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div
        onClick={() => handleModalInfo(project)}
        className="w-full cursor-pointer overflow-hidden rounded-t-xl"
      >
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-4 text-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-4">
            {project.description}
          </p>
        </div>

        {/* Buttons at the bottom */}
        <div className="flex justify-center gap-3 mt-auto">
          <button
            onClick={() => openInNewTab(project.code)}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-primary-color to-green-400 text-black font-semibold hover:scale-105 transition-transform duration-300"
          >
            View Code
          </button>

          <button
            onClick={() => handleModalInfo(project)}
            className="px-4 py-2 rounded-md bg-gray-700 text-white font-semibold hover:scale-105 transition-transform duration-300"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
