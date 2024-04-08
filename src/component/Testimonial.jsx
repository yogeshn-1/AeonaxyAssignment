import React from "react";
import bgTestim from "../img/testimonialBg.png";
import bitly from "../img/Bitly.svg";
import stack from "../img/StackOverflow.svg";
import texas from "../img/UTAustin.svg";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-4 items-center testimonial">
      <h4 className="text-lg feature_title">Success Stories</h4>
      <h5 className="text-4xl font-bold title_text">
        Do more of what you do best
      </h5>
      <h3 className="max-w-3xl text-3xl text-center font-thin content_text">
        Eliminate scheduling hassels and interruptions so your organization
        accomplishes more.
      </h3>
      <section className="flex gap-6 w-3/4 mx-auto lg:px-2 px-6 py-2 sm:flex-col xs:flex-col ">
        <article className="flex flex-col gap-2 shadow-lg ">
          <div
            className="w-full h-[200px]"
            style={{ background: `url(${bgTestim}) center /cover` }}
          >
            <img
              src={stack}
              className="relative top-2 left-4 w-40 md:w-32 xs:w-28 xl:w-48"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 px-4 py-2">
            <h2 className="text-blue-500 ">Customer story</h2>
            <p className="text-lg font-mono content_text">
              Stack Overflow's streamlined admin forges relationships with new
              recruits
            </p>
            <span className="flex group font-semibold text-blue-500 cursor-pointer">
              Read more{" "}
              <p className=" mx-2 group-hover:translate-x-3 duration-200">
                &gt;
              </p>
            </span>
          </div>
        </article>
        <article className="flex flex-col gap-2 shadow-lg">
          <div
            className="w-full h-[200px]"
            style={{ background: `url(${bgTestim}) center /cover` }}
          >
            <img src={texas} className="relative top-2 left-4 w-12" alt="" />
          </div>
          <div className="flex flex-col gap-2 px-4 py-2">
            <h2 className="text-blue-500 ">Customer story</h2>
            <p className="text-lg font-mono content_text">
              University of Texas at Austin saves money through administrative
              scheduling
            </p>
            <span className="flex group font-semibold text-blue-500 cursor-pointer">
              Read more{" "}
              <p className=" mx-2 group-hover:translate-x-3 duration-200">
                &gt;
              </p>
            </span>{" "}
          </div>
        </article>
        <article className="flex flex-col gap-2 shadow-lg ">
          <div
            className="w-full h-[200px]"
            style={{ background: `url(${bgTestim}) center /cover` }}
          >
            <img src={bitly} className="relative top-2 left-4 w-20" alt="" />
          </div>
          <div className="flex flex-col gap-2 px-4 py-2 ">
            <h2 className="text-blue-500 ">Customer story</h2>
            <p className="text-lg font-mono content_text">
              More meetings, better prospects boost Bitly's conversions across
              the board
            </p>
            <span className="flex group font-semibold text-blue-500 cursor-pointer">
              Read more
              <p className=" mx-2 group-hover:translate-x-3 duration-200">
                &gt;
              </p>
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Testimonial;
