import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HomeImage from "../assets/profilepic/portfolioPic.JPEG";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      style={{ paddingTop: "4rem" }} // Adjusted padding top to prevent overlap with navbar
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:mr-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md text-lg md:text-base">
            Welcome to my portfolio! I am a proactive, persevering, and
            responsible aspiring junior developer dedicated to refining my
            skills across various technologies. Rooted in a solid foundation and
            fueled by a relentless appetite for learning, I eagerly anticipate
            the opportunity to contribute to diverse projects and expand my
            expertise within a collaborative development environment. Explore my
            work and journey as I strive to make meaningful contributions to the
            world of technology.
          </p>
          <div className="mt-6 md:mt-0">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <div className="w-full md:w-96 overflow-hidden rounded-2xl">
            <img
              src={HomeImage}
              alt="my profile"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Media query for smaller screen sizes */}
      <style jsx>{`
        @media (max-width: 768px) {
          .h-screen {
            min-height: calc(100vh - 4rem); // Adjusted height to fit the viewport
          }
          .flex-col-reverse {
            flex-direction: column-reverse; // Reverse flex direction for smaller screens
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
