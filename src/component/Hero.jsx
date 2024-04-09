import React from "react";
import heroImage from "../img/Calendly-Enterprise-Small__3_.png";

const Hero = () => {
  return (
    <section className="bg-[#092640] w-full">
      <div className="flex items-center justify-around px-4 text-white gap-4 py-10 max-w-7xl w-full mx-auto sm:flex-col xs:flex-col">
        <section className="flex flex-col gap-4 ">
          <h2 className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-bold w-10 sm:w-1/2 xs:w-3/4">
            Secure connections, empowered teams
          </h2>
          <p className="w-1/2 sm:w-3/4 xs:w-full">
            Bring your temas together in a centrally-managed ecosystem with
            complete oversight and visibility
          </p>
          <button className="p-3 bg-blue-500 rounded-2xl w-fit ">
            Contact sales
          </button>
        </section>
        <div className="w-5/12 md:w-3/4 sm:w-3/4 xs:w-3/4">
          <img src={heroImage} style={{ background: "transparent" }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
