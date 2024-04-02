import React from "react";
import heroImage from "../img/Calendly-Enterprise-Small__3_.png";

const Hero = () => {
  return (
    <section className="bg-[#092640] w-full">
      <div className="flex items-center justify-around px-8 text-white gap-4 py-10 max-w-7xl w-full mx-auto sm:flex-col xs:flex-col">
        <section className="flex flex-col gap-4 ">
          <h2 className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-bold w-10">
            Secure connections, empowered teams
          </h2>
          <p>
            Bring your temas together in a centrally-managed{" "}
            <br className="sm:hidden" /> ecosystem with complete oversight and
            visibility
          </p>
          <button className="p-3 bg-blue-500 rounded-2xl w-fit ">
            Contact sales
          </button>
        </section>
        <div className="w-5/12 md:w-1/2 sm:w-3/4 xs:w-3/4">
          <img
            className="bg-zinc-300 text-xs"
            src={heroImage}
            style={{ background: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
