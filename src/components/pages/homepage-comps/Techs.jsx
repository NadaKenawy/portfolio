import React from "react";
import dart from "../../../assets/dart.png";
import  flutter from "../../../assets/flutter.webp";
import javascript from "../../../assets/javascript.png";
import bloc from "../../../assets/bloc.png";
import firebase from "../../../assets/firebase.png";
import c from "../../../assets/c++.png";
import java from "../../../assets/java.png";
import python from "../../../assets/python.png";
import git from "../../../assets/git.png";
import css from "../../../assets/css.png";
import github from "../../../assets/github.png";
import html from "../../../assets/html.png"

import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: dart,
      title: "dart",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: flutter,
      title: "flutter",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src: bloc,
      title: "bloc",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: firebase,
      title: "firebase",
      style: "shadow-cyan-400",
    },

    {
      id: 5,
      src: c,
      title: "c++",
      style: "shadow-cyan-700",
    },
 
    {
      id: 6,
      src: java,
      title: "java",
      style: "shadow-orange-600",
    },
    {
      id: 7,
      src: python,
      title: "python",
      style: "shadow-white",
    },
    {
      id: 8,
      src: git,
      title: "git",
      style: "shadow-white",
    },
    {
      id: 9,
      src: github,
      title: "github",
      style: "shadow-white",
    },
    {
      id: 10,
      src: javascript,
      title: "javascript",
      style: "shadow-white",
    },
    {
      id: 11,
      src: css,
      title: "css",
      style: "shadow-white",
    },
    {
      id: 12,
      src: html,
      title: "html",
      style: "shadow-white",
    },


  
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
