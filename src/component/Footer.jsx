import React, { useState } from "react";
import playstore from "../img/Playstore.png";
import appstore from "../img/AppleappStore.png";

const Footer = () => {
  return (
    <footer className="my-6">
      <div className="flex gap-16 sm:flex-col xs:flex-col max-w-7xl mx-auto ">
        <section className="flex flex-col gap-10 w-1/4 sm:w-1/2 xs:w-3/4 mx-auto px-3">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-[#1a2f44]">Easy</span>
            <span className="text-3xl font-bold text-blue-600">ahead</span>
            <p className="content_text">
              We take the work out of connecting with others so you can
              accomplish more{" "}
            </p>
          </div>
          <select className="border rounded-md py-1 px-2" defaultValue="eng">
            <option value="eng">English</option>
            <option value="french">French</option>
            <option value="esp">Spanish</option>
          </select>
          <div className="flex gap-2 w-20">
            <img src={appstore} alt="get it on app store " />
            <img src={playstore} alt="get it on playstore" />
          </div>
        </section>
        <section className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-4 px-3 ms-10 flex-1">
          <ul>
            <h3 className="title_text text-lg font-bold mb-2">About</h3>
            <div className="flex flex-col gap-2 content_text">
              <li className="cursor-pointer hover:underline">About Calendly</li>
              <li className="cursor-pointer hover:underline">Contact Sales</li>
              <li className="cursor-pointer hover:underline">News Room</li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">Security</li>
            </div>
          </ul>
          <ul>
            <h3 className="title_text text-lg font-bold mb-2">Solutions</h3>
            <div className="flex flex-col gap-2 content_text">
              <li className="cursor-pointer hover:underline">
                Customer Success
              </li>
              <li className="cursor-pointer hover:underline">Sales</li>
              <li className="cursor-pointer hover:underline">Recruiting</li>
              <li className="cursor-pointer hover:underline">
                Information Technology
              </li>
              <li className="cursor-pointer hover:underline">Marketing</li>
            </div>
          </ul>
          <ul>
            <h3 className="title_text text-lg font-bold mb-2">
              Popular Feature
            </h3>
            <div className="flex flex-col gap-2 content_text">
              <li className="cursor-pointer hover:underline">Embed Calendly</li>
              <li className="cursor-pointer hover:underline">Availability</li>
              <li className="cursor-pointer hover:underline">
                Sending Notifications
              </li>
              <li className="cursor-pointer hover:underline">
                Using Calendly Mobile
              </li>
            </div>
          </ul>
          <ul>
            <h3 className="title_text text-lg font-bold mb-2">Support</h3>
            <div className="flex flex-col gap-2 content_text">
              <li className="cursor-pointer hover:underline">Help Center</li>
              <li className="cursor-pointer hover:underline">
                Video Tutorials
              </li>
              <li className="cursor-pointer hover:underline">
                Cookie Settings
              </li>
            </div>
          </ul>
          <ul>
            <h3 className="title_text text-lg font-bold mb-2">Add-Ons</h3>
            <div className="flex flex-col gap-2 content_text">
              <li className="cursor-pointer hover:underline">
                Download for Chrome
              </li>
              <li className="cursor-pointer hover:underline">
                Download for FireFox
              </li>
            </div>
          </ul>
          <ul>
            <h3 className="title_text text-lg font-bold mb-2">Developers</h3>
            <div className="flex flex-col gap-2 content_text">
              <li className="cursor-pointer hover:underline">
                Developer Tools
              </li>
            </div>
          </ul>
        </section>
      </div>
      <span className="flex xs:flex-col xs:text-center max-w-7xl mx-auto px-2 my-6 justify-between text-sm text-gray-600 ">
        <p>&copy; Copyright Calendly 2024</p>
        <p>Privacy / Terms and conditions</p>
      </span>
    </footer>
  );
};

export default Footer;
