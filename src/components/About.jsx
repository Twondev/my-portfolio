import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
      style={{ paddingTop: "80px" }} // Add padding to the top to avoid overlap
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <br />
          <br />
          <br />
          <p className="text-xl mt-20 md:mt-8">
            Hey there, I'm CHAOUKI Anass. I'm just someone who loves to dive
            into coding and is always eager to learn and improve. My goal? To be
            a part of some really cool projects where I can use my coding skills
            to make a real difference.{" "}
          </p>
          <br />

          <p className="text-xl">
            Apart from coding, I'm pretty into sports, gaming, and reading.
            Whether I'm shooting hoops, battling monsters on my console, or
            getting lost in a good book, these hobbies keep me inspired and
            ready to tackle new challenges.
          </p>
          <br />
          <p className="text-xl">
            So, take a peek at my portfolio and join me on this journey of
            discovery and growth. Let's chat, collaborate, and see what amazing
            things we can create together!
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
