import React from "react";

const Callout = () => {
  return (
    <section className="bg-[#092640] w-full text-white py-12 my-8">
      <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold ">
          Secure connections, empowered teams
        </h2>
        <p className="font-thin text-lg sm:text-base xs:text-sm">
          Calendly enables teams across the organization to do their jobs more
          efficiently, create better customer connections, and get more value
          from the tools they already rely on.
        </p>
        <button className="px-6 py-4 font-semibold sm:text-base xs:text-sm border border-white w-fit self-center rounded-full hover:bg-white hover:text-[#092640]">
          Talk with Sales
        </button>
      </div>
    </section>
  );
};

export default Callout;
