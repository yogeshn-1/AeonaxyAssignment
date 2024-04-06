import React from "react";
import agri from "../img/AgriWebb.svg";
import virtru from "../img/Virtru.svg";
import lyft from "../img/Lyft.svg";
import scale from "../img/virtual-assistant.svg";
import automate from "../img/Automate.svg";
import integration from "../img/Calendly-Real-Time-Availaility.png";

const Introduction = () => {
  return (
    <section id="intro" className=" mx-auto  mt-4  text-[#08355A] ">
      <div className="max-w-3xl mx-auto flex my-10 flex-col gap-4 text-center">
        <h2 className="text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-semibold">
          Work faster, smarter and more securely
        </h2>
        <p className="text-xl">
          Sales, Customer success, Support, Recruiting and marketing teams rely
          on scheduling platforms to save time and quickly connect with
          customers{" "}
        </p>
      </div>
      <div className=" bg-[#F7FAFF] w-full">
        <ul className=" flex gap-2 justify-evenly max-w-7xl mx-auto py-10">
          <li className="flex flex-col gap-3">
            <span className="text-3xl font-bold">75%</span>
            <p className="w-3/4 text-lg">
              reduction in time to schedule customer success
            </p>
            <img src={agri} alt="" className="w-8 inline-block" />
          </li>{" "}
          <li className="flex flex-col gap-3">
            <span className="text-3xl font-bold">200%</span>
            <p className="w-3/4 text-lg">
              increase in connections between sales and customer leads
            </p>
            <img src={virtru} alt="" className="w-14 inline-block" />
          </li>
          <li className="flex flex-col gap-3">
            <span className="text-3xl font-bold">75%</span>
            <p className="w-3/4 text-lg">more customers onboarded per month</p>
            <img src={lyft} alt="" className="w-8 inline-block" />
          </li>
        </ul>
      </div>
      <article className="flex justify-around items-center my-3 feature ">
        <div className=" flex flex-col gap-4 w-1/3 feature_content">
          <h2 className="text-xl font-bold">
            Retain controls as your team scales
          </h2>
          <p className="content_text">
            Working within one organizational account ensures yousecurely
            account for all active users as you scale. WithCalendly, IT teams
            can maintain more oversight overaccount access and individual
            permissions, as well asaudit activity at any time.
          </p>
        </div>
        <img src={scale} alt="" className="w-1/3" />
      </article>
      <article className="flex justify-around items-center my-3 bg-[#F8F8F8] feature">
        <div className="flex flex-col gap-4 w-1/3 feature_content">
          <h2 className="text-xl font-bold">
            Automate IT workflows to accomplish more
          </h2>
          <p className="content_text">
            Calendly's advanced security integrations overlayseamlessly with
            your corporate authentication policies andprovisioning workflows. IT
            admins save time and reduce riskawith auto-provisioning and
            deprovisioning via SCIM andSingle Sign-On (SSO).
          </p>
        </div>
        <img src={automate} alt="" className="w-1/3" />
      </article>
      <article className="flex justify-around items-center my-3 feature ">
        <div className="flex flex-col gap-4 w-1/3 feature_content">
          <h2 className="text-xl font-bold">
            Get more value from your existing technology
          </h2>
          <p className="content_text">
            Calendly securely integrates with the tools your teams relyon every
            day. This includes seamless OAuth throughGoogle Calendar and
            Office365 as well as integrationsacross leading video conferencing
            tools (Zoom, GoogleMeet, Microsoft Teams, Webex), and more.
          </p>
        </div>
        <img src={integration} alt="" className="w-1/3" />
      </article>
    </section>
  );
};

export default Introduction;
