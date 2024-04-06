import React from "react";
import privacy from "../img/Calendly-Security-Management.png";

const Features = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h4 className="feature_title">Calendly Features</h4>
        <h5 className="text-3xl font-bold title_text">
          Favourite Security Features
        </h5>
        <h3 className="max-w-3xl text-3xl text-center font-thin content_text">
          Here's a close look at some of the security features IT admins enjoy
          with calendly
        </h3>
        <div className="flex text-sm my-2">
          <button className="py-3 px-6 mx-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full w-fit duration-200">
            Start for free
          </button>
          <button className="py-3 px-6 mx-2 border-2 hover:bg-black hover:text-white border-black rounded-full w-fit duration-200">
            Learn more
          </button>
        </div>
      </div>
      <article className="flex justify-around items-center my-3 feature sm:flex-col ">
        <div className="flex flex-col gap-4 w-1/3 feature__content">
          <h2 className="feature_title">User pii data deletion</h2>
          <h2 className="text-xl font-bold feature_text">
            Maintain GDPR Compliance
          </h2>
          <p className="content_text">
            Calendly securely integrates with the tools your teams relyon every
            day. This includes seamless OAuth throughGoogle Calendar and
            Office365 as well as integrationsacross leading video conferencing
            tools (Zoom, GoogleMeet, Microsoft Teams, Webex), and more.
          </p>
        </div>
        <img src={privacy} alt="" className="w-1/3" />
      </article>
    </>
  );
};

export default Features;
