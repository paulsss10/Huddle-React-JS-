import React from "react";
import logo from "../resources/logo.svg";
import heroImage from "../resources/illustration-mockups.svg";

import fb_logo from "../resources/Facebook_white.svg";
import twtr_logo from "../resources/Twitter_white.svg";
import discord from "../resources/Discord_white.svg";

const Version_one = () => {
  return (
    <div className="versionOne">
      <div className="container container--pall">
        <div className="versionOne__images">
          <img className="logo" src={logo} />
          <img className="hero-image" src={heroImage} />
        </div>

        <img />

        <div className="versionOne__text">
          <h2>Build The Community Your Fans Will Love</h2>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connecions with your users as you
            engage in genuine discussion.
          </p>

          <a href="#" className="register__cta button">
            Register
          </a>

          <div className="social-media">
            <img src={fb_logo} />
            <img src={twtr_logo} />
            <img src={discord} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version_one;
