import React from "react";
import privacy from "../img/Calendly-Security-Safety.png";
import scim from "../img/Calendly-Automate-Access.png";
import userGroups from "../img/Calendly-Group-Admin.png";
import sso from "../img/Calendly-Secure-User-Management-2__1_.png";

const Features = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h4 className="text-lg feature_title">Calendly Features</h4>
        <h5 className="text-4xl font-bold title_text">
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
      <article className="flex justify-around items-center my-3 it_feature sm:flex-col xs:flex-col ">
        <div className="flex flex-col gap-4 w-1/3 xs:w-full sm:w-full xs:p-2 sm:p-2 sm:gap-2 xs:gap-2 feature_content">
          <h2 className="feature_title">User pii data deletion</h2>
          <h2 className="text-2xl font-bold feature_subtitle_text">
            Maintain GDPR Compliance
          </h2>
          <p className="text-lg content_text">
            Stay compliant with privacy rules and regulations at scale with
            self-service data deletion, which allows admins to immediately erase
            user data as needed.
          </p>
        </div>
        <img src={privacy} alt="" className="w-1/3 sm:w-1/2 xs:w-1/2" />
      </article>
      <article className="flex justify-around items-center my-3 it_feature sm:flex-col xs:flex-col">
        <div className="flex flex-col gap-4 w-1/3 xs:w-full sm:w-full xs:p-2 sm:p-2 sm:gap-2 xs:gap-2 feature_content">
          <h2 className="feature_title">User group</h2>
          <h2 className="text-2xl font-bold feature_subtitle_text">
            Save time with group admins
          </h2>
          <p className="text-lg content_text">
            Delegate specific team members with group admin privileges to manage
            users, processes, and other account settings.
          </p>
        </div>
        <img src={userGroups} alt="" className="w-1/3 sm:w-1/2 xs:w-3/4" />
      </article>
      <article className="flex justify-around items-center my-3 it_feature sm:flex-col xs:flex-col">
        <div className="flex flex-col gap-4 w-1/3 xs:w-full sm:w-full xs:p-2 sm:p-2 sm:gap-2 xs:gap-2 feature_content">
          <h2 className="feature_title">Single sign-on (SSo)</h2>
          <h2 className="text-2xl font-bold feature_subtitle_text">
            Reduce risk with secure authentication
          </h2>
          <p className="text-lg content_text">
            Deploy Calendly confidently with support for SAML based SSO with
            leading identity providers Okta,Ping Identity, Azure, OneLogin, and
            Auth0.
          </p>
        </div>
        <img src={sso} alt="" className="w-1/3 sm:w-1/2 xs:w-3/4" />
      </article>
      <article className="flex justify-around items-center my-3 it_feature sm:flex-col xs:flex-col">
        <div className="flex flex-col gap-4 w-1/3 xs:w-full sm:w-full xs:p-2 sm:p-2 sm:gap-2 xs:gap-2 feature_content">
          <h2 className="feature_title">Scim Provisioning</h2>
          <h2 className="text-2xl font-bold feature_subtitle_text">
            Manage user access at scale
          </h2>
          <p className="text-lg content_text">
            Efficiently onboard and off-board employees with automatic
            provisioning and de-provisioning viaSCIM with Okta, OneLogin, and
            Microsoft Azure.
          </p>
        </div>
        <img src={scim} alt="" className="w-1/3 sm:w-1/2 xs:w-3/4" />
      </article>
    </>
  );
};

export default Features;
